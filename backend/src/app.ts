require('dotenv').config();
require('express-async-errors');
import express, { Request, Response } from 'express';
import { apiRouter } from '@routes/index';
import * as dynamoose from 'dynamoose';
import { dynamoDb } from '@databases/index';

dynamoose.aws.ddb.set(dynamoDb);

const app = express();

app.use('/hello', (req, res, next) => {
    res.status(200).send('Hello!!');
});

app.use('/api/v1', apiRouter);

app.use((err: any, req: Request, res: Response) => {
    console.error('error', err.stack);
    res.status(500).send('Something broke!');
});

export { app };
