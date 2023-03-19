import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createTokenMintMetadataSucceededHandler(data: any) {
    const { item } = data;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const mintToMasterSignature = await solanaService.mintTokenToMaster(item.tokenMintAddress);

        item.mintToMasterSignature = mintToMasterSignature;
        item.state = 'TOKEN_MINTED_TO_MASTER';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'MINT_TOKEN_TO_MASTER_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'MINT_TOKEN_TO_MASTER_FAILED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'MINT_TOKEN_TO_MASTER_FAILED',
            data: { item: item },
        });
    }
}
