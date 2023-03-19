import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createNewItemSucceededHandler(data: any) {
    const { item } = data;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const tokenMintAddress = await solanaService.createTokenMint();

        item.tokenMintAddress = tokenMintAddress;
        item.state = 'TOKEN_MINT_CREATED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'CREATE_TOKEN_MINT_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'CREATE_TOKEN_MINT_FAILED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'CREATE_TOKEN_MINT_FAILED',
            data: { item: item },
        });
    }
}
