import { appPlugin } from './container';
import fastify, {FastifyInstance} from "fastify";

export async function bootstrap(): Promise<FastifyInstance> {
    const port: number = parseInt(process.env.PORT || '4500', 10);
    const app: FastifyInstance = fastify({
        logger: false,
    });
    await app.register(appPlugin);

    app.listen(port, process.env.FASTIFY_ADDRESS).then(server => {
        console.log('server running at', server)
    }).catch(err => {
        console.log(err);
    });

    return app;

}
