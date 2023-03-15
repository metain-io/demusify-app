import * as dynamoose from 'dynamoose';

const NFTLicensedModel = dynamoose.model(
    'beta-demusify-nft-licensed',
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
            liked: Number
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTLicensedModel };
