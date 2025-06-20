import express from 'express';
import userRoutes from './routes/user.routes';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlerwares/error.middlerware';

export const createApp = () => {
    const app = express();

    app.use(bodyParser.json());

    // Routes
    app.use('/api/users', userRoutes);

    // Error
    app.use(errorMiddleware);

    return app;
}