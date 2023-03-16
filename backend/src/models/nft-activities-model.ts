import * as dynamoose from 'dynamoose';

const NFTActivitiesModel = dynamoose.model(
    'beta-demusify-nft-activities',
    new dynamoose.Schema(
        {
            creatorID: {
                hashKey: true,
                type: String
            },
            nftID: {
                type: String,
                rangeKey: true,
            },
            behavior: String,
            description: String,
            createTime: Number
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTActivitiesModel };
