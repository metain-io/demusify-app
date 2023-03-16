import * as dynamoose from 'dynamoose';

const NFTLicensedTransactionModel = dynamoose.model(
    'beta-demusify-nft-licensed-transactions',
    new dynamoose.Schema(
        {
            nftID: {
                hashKey: true,
                type: String
            },
            transactionSignature: {
                type: String,
                rangeKey: true,
            },
            value: Number,
            license: String,
            createTime: Number,
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTLicensedTransactionModel };
