import * as dynamoose from 'dynamoose';

const ItemModel = dynamoose.model(
    'beta-demusify-items',
    new dynamoose.Schema({
        itemID: String,
        collectionID: String,
    }),
);

export { ItemModel };
