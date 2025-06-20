import express from 'express';
import authRoutes from './routes/auth.routes';
import countryRoutes from './routes/country.routes';
import taskRoutes from './routes/task.routes';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlerwares/error.middlerware';

export const createApp = () => {
    const app = express();

    app.use(bodyParser.json());

    // Routes
    app.use('/api/users', authRoutes);
    app.use('/api/countries', countryRoutes);
    app.use('/api/tasks', taskRoutes);

    // Error
    app.use(errorMiddleware);

    return app;
}