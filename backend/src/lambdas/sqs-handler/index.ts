require('dotenv').config();
import { messageBus } from './message-bus';
import * as dynamoose from 'dynamoose';
import { dynamoDb } from '@databases/index';

dynamoose.aws.ddb.set(dynamoDb);

export const handler = (event: object, context: object) => {
    const records = event['Records'];

    records.forEach((record) => {
        const body = record['body'];

        const jsonBody = JSON.parse(body);

        const message = jsonBody['type'];
        const input = jsonBody['input'];

        messageBus[message]?.(input);
    });
};
