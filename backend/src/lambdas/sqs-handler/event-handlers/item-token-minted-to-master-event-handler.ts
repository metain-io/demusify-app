import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemTokenMintedToMasterEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const transferToCreatorSignature = await solanaService.transferTokenFromMaster(
            item.tokenMintAddress,
            item.creatorAddress,
            1,
        );

        item.transferToCreatorSignature = transferToCreatorSignature;
        item.state = 'COMPLETED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'ITEM_COMPLETED',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'TRANSFER_ITEM_TOKEN_TO_CREATOR_FAILED',
            input: { item, error },
        });
    }
}
