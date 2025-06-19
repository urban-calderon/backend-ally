import express from 'express';

export const createApp = () => {
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
        res.send('Server up!')
    });

    return app;
}