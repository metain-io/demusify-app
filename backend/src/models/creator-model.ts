import * as dynamoose from 'dynamoose';

const CreatorModel = dynamoose.model(
    'beta-demusify-creators',
    new dynamoose.Schema({
        username: String,
        name: String,
        bio: String,
        email: String,
        twitterLink: String,
        instagramLink: String,
        yourSiteLink: String,
        avatarUrl: String,
    }),
);

export { CreatorModel };
