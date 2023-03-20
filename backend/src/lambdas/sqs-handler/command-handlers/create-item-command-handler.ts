import { ItemService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createItemCommandHandler(input: any) {
    const { item } = input;
    const itemService = new ItemService();

    try {
        item.state = 'PENDING';
        await itemService.createItem(item);

        await sendSqsMessage({
            type: 'ITEM_CREATED',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'CREATE_ITEM_FAILED',
            input: { item, error },
        });
    }
}
