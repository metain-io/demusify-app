import express from 'express';
import { apiRouter } from '@routes/index';

require('dotenv').config();

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1', apiRouter);

export { app };
