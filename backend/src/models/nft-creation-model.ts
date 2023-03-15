import * as dynamoose from 'dynamoose';

const NFTCreationModel = dynamoose.model(
    'beta-demusify-nft-creations',
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
            name: String,
            externalLink: String,
            description: String,
            collectionId: String,
            properties: String,
            levels: String,
            licences: String,
            artCoverUrl: String,
            musicUrl: String,
            liked: Number,
            totalSale: Number,
            totalRevenue: Number
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTCreationModel };
