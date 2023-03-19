import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function mintTokenToMasterSucceededHandler(data: any) {
    const { item } = data;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const transferToCreatorSignature = await solanaService.transferTokenFromMaster(
            item.tokenMintAddress,
            item.creatorAddress,
            1,
        );

        item.transferToCreatorSignature = transferToCreatorSignature;
        item.state = 'TOKEN_TRANSFERED_TO_CREATOR';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'TRANSFER_TOKEN_TO_CREATOR_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'TRANSFER_TOKEN_TO_CREATOR_FAILED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'TRANSFER_TOKEN_TO_CREATOR_FAILED',
            data: { item: item },
        });
    }
}
