import * as dynamoose from 'dynamoose';

const CollectionModel = dynamoose.model(
    'beta-demusify-collections',
    new dynamoose.Schema({
        collectionID: String,
        username: String,
    }),
);

export { CollectionModel };
