import { app } from "../App/app.js";
import { env } from "../newProcess.js";
process.on('uncaughtException', (err) => {
    console.log('Uncaught exception', err.name);
    console.log('shutting down server');
    process.exit(1);
});
const server = app.listen(env.PORT, () => {
    console.log('Server listening on the port', env.PORT);
});
process.on('unhandledRejection', (err) => {
    console.log('Unhandled rejection : ', err.name);
    console.log('Stack is : ', err.stack);
    server.close(() => {
        console.log('Shutting down server');
        process.exit(1);
    });
});
