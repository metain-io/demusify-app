import * as dynamoose from 'dynamoose';

const CreatorModel = dynamoose.model(
    'beta-demusify-creators',
    new dynamoose.Schema({
        username: String,
        name: String,
    }),
);

export { CreatorModel };
