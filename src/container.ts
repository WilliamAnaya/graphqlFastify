import {FastifyPluginAsync} from "fastify";
import {AutoloadPluginOptions} from "fastify-autoload";
import fastifyCompress from "@fastify/compress";
import {ApolloServer, gql} from "apollo-server-fastify";
import {schema} from "./schemas";

export type AppOptions = {} & Partial<AutoloadPluginOptions>;
export const appPlugin: FastifyPluginAsync<AppOptions> = async (fastify, options): Promise<void> => {
    await fastify.register(fastifyCompress, {
        encodings: ['gzip', 'deflate'],
    });

    const apolloServer = new ApolloServer({schema, introspection: true});
    await apolloServer.start();

    fastify.register(apolloServer.createHandler());

    fastify.get('/', (_, res) => {
        res.redirect("/graphql")
    });

    await fastify.after();
}
