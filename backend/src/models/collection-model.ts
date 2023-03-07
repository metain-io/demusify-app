import * as dynamoose from 'dynamoose';

const CollectionModel = dynamoose.model(
    'CollectionModel',
    new dynamoose.Schema({
        collectionID: String,
        username: String,
    }),
);

export { CollectionModel };
