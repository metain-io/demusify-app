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
            mintToMasterSignature: String,
            transferToCreatorSignature: String,
            itemID: String,
            createdAt: Number,
            updatedAt: Number
        }
    ),
);

export { NFTCreationModel };
