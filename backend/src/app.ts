import express from 'express';
import { apiRouter } from '@routes/index';
import * as dynamoose from 'dynamoose';
import { dynamoDb } from '@databases/index';

require('dotenv').config();

dynamoose.aws.ddb.set(dynamoDb);

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1', apiRouter);

export { app };
