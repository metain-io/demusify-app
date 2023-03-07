import * as dynamoose from 'dynamoose';

const ItemModel = dynamoose.model(
    'ItemModel',
    new dynamoose.Schema({
        itemID: String,
        collectionID: String,
    }),
);

export { ItemModel };
