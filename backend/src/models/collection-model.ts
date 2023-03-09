import * as dynamoose from 'dynamoose';

const CollectionModel = dynamoose.model(
    'beta-demusify-collections',
    new dynamoose.Schema(
        {
            collectionID: {
                type: String,
                hashKey: true,
            },
            username: {
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

export { CollectionModel };
