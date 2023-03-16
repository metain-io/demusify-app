import * as dynamoose from 'dynamoose';

const NFTLicensedModel = dynamoose.model(
    'beta-demusify-nft-licensed',
    new dynamoose.Schema(
        {
            consumerID: {
                hashKey: true,
                type: String
            },
            nftID: {
                type: String,
                rangeKey: true,
            },
            createAt: Number
        }
    ),
);

export { NFTLicensedModel };
