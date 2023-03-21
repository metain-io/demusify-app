import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemTokenMintMetadataCreatedEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const mintToMasterSignature = await solanaService.mintTokenToMaster(item.tokenMintAddress);

        item.mintToMasterSignature = mintToMasterSignature;
        item.state = 'ITEM_TOKEN_MINTED_TO_MASTER';
        await itemService.updateItem(item.itemID, item);

        await sendSqsMessage({
            type: 'ITEM_TOKEN_MINTED_TO_MASTER',
            input: { item },
        });
    } catch (error) {
        console.log('MINT_TOKEN_TO_MASTER_FAILED', item, error);

        item.state = 'MINT_TOKEN_TO_MASTER_FAILED';
        await itemService.updateItem(item.itemID, item);
    }
}
