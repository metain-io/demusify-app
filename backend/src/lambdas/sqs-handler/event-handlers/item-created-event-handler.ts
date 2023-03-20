import { ItemService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemCreatedEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemService = new ItemService();

    try {
        const tokenMintAddress = await solanaService.createTokenMint();

        item.tokenMintAddress = tokenMintAddress;
        item.state = 'ITEM_TOKEN_MINT_CREATED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'ITEM_TOKEN_MINT_CREATED',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'CREATE_ITEM_TOKEN_MINT_FAILED',
            input: { item, error },
        });
    }
}
