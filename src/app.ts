import {bootstrap} from "./bootstrap";

const start = async () => {
    try {
        await bootstrap();
    } catch (err) {
        console.log(err)
    }
}

start();
