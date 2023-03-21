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
        console.log('CREATE_ITEM_FAILED', item, error);
    }
}
