//Building the executable schema
import {GraphQLSchema} from "graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";
import "graphql-import-node";
import {resolverIndex} from "../resolvers";
import path from "path";
// @ts-ignore
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(path.join(__dirname, "./graphql"), {
    extensions: ["graphql"],
});
const typeDefs = mergeTypeDefs(typesArray);

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers: resolverIndex
});
