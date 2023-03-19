import * as dynamoose from 'dynamoose';

export const PaymentModel = dynamoose.model(
    'beta-demusify-payments',
    new dynamoose.Schema(
        {
            txID: {
                type: String,
                hashKey: true,
            },
            payerID: {
                type: String,
                rangeKey: true,
            },
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);
