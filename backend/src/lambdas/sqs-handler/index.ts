require('dotenv').config();
import { messageBus } from './message-bus';

export const handler = (event: object, context: object) => {
    const records = event['Records'];

    records.forEach((record) => {
        const body = record['body'];
        const type = body['type'];
        const data = body['data'];

        messageBus[type]?.(data);
    });
};
