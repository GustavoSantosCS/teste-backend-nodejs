import express from 'express';
import routes from '@/main/config/routes';
import middleware from '@/main/config/middlewares';

const app = express();

middleware(app);
routes(app);

app.get('/', (request, response) => response.send('Hello World'));

export default app;
