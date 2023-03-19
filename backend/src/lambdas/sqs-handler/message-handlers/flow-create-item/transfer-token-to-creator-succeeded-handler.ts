import { ItemService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function transferTokenToCreatorSucceededHandler(data: any) {
    const { item } = data;
    const itemService = new ItemService();

    try {
        item.state = 'COMPLETED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'MARK_ITEM_CREATION_COMPLETED_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'MARK_ITEM_CREATION_COMPLETED_FAILED';
        await itemService.updateItem(item.id, item);

        await sendSqsMessage({
            type: 'MARK_ITEM_CREATION_COMPLETED_FAILED',
            data: { item: item },
        });
    }
}
