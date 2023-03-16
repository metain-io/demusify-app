import * as dynamoose from 'dynamoose';

const NFTLicenseModel = dynamoose.model(
    'beta-demusify-nft-licenses',
    new dynamoose.Schema(
        {
            consumerID: {
                type: String,
                hashKey: true,
            },
            nftID: {
                type: String,
                rangeKey: true,
            },
            txID: String,
            metadata: Object
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTLicenseModel };
