import express from 'express';

require('dotenv').config();

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World');
});

export { app };
