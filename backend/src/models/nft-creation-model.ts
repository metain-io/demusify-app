import * as dynamoose from 'dynamoose';

const NFTCreationModel = dynamoose.model(
    'beta-demusify-nft-creations',
    new dynamoose.Schema(
        {
            creatorID: {
                type: String,
                hashKey: true,
            },
            nftID: {
                type: String,
                rangeKey: true,
            },
            mintToMasterSignature: String,
            transferToCreatorSignature: String,
            metadata: Object,
        },
        {
            saveUnknown: true,
            timestamps: true,
        },
    ),
);

export { NFTCreationModel };
