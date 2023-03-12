import * as dynamoose from 'dynamoose';

const ItemModel = dynamoose.model(
    'beta-demusify-items',
    new dynamoose.Schema(
        {
            itemID: {
                type: String,
                hashKey: true,
            },
            collectionID: {
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

export { ItemModel };
