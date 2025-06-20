import express from 'express';
import authRoutes from './routes/auth.routes';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlerwares/error.middlerware';

export const createApp = () => {
    const app = express();

    app.use(bodyParser.json());

    // Routes
    app.use('/api/users', authRoutes);

    // Error
    app.use(errorMiddleware);

    return app;
}