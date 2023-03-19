import { NFTCreationService } from '@services/index';

export async function markItemCreationCompletedSucceededHandler(data: any) {
    const { item } = data;

    const nftCreationService = new NFTCreationService();
    await nftCreationService.createNFTCreation({
        creatorID: item.username,
        nftID: item.tokenMintAddress,
        itemID: item.itemID,
        mintToMasterSignature: item.mintToMasterSignature,
        transferToCreatorSignature: item.transferToCreatorSignature,
    });

    console.log('Create item completed', item);
}
