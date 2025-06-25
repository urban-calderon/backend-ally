import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import countryRoutes from './routes/country.routes';
import taskRoutes from './routes/task.routes';
import users from './routes/users.routes';
import bodyParser from 'body-parser';
import { errorMiddleware } from './middlerwares/error.middlerware';

export const createApp = () => {
    const app = express();

    //Cors
    app.use(cors());

    app.use(bodyParser.json());

    // Routes
    app.use('/api/auth', authRoutes);
    app.use('/api/countries', countryRoutes);
    app.use('/api/tasks', taskRoutes);
    app.use('/api/users', users);

    // Error
    app.use(errorMiddleware);

    return app;
}