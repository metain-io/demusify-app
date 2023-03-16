import * as dynamoose from 'dynamoose';

const NFTLicenseModel = dynamoose.model(
    'beta-demusify-nft-licenses',
    new dynamoose.Schema(
        {
            consumerID: {
                type: String,
                hashKey: true,
            },
            txID: {
                type: String,
                rangeKey: true,
            },
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTLicenseModel };
