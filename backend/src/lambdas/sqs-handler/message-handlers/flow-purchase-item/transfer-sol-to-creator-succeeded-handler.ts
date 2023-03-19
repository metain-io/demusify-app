import { NFTLicenseService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function transferSolToCreatorSucceededHandler(data: any) {
    const { item } = data;
    const itemService = new NFTLicenseService();

    try {
        item.state = 'MARK_ITEM_PAYMENT_CREATION_COMPLETED_SUCCEEDED';
        await itemService.update(item.id, item);

        // TODO: send sqs message: MARK_ITEM_PAYMENT_CREATION_COMPLETED_SUCCEEDED
        await sendSqsMessage({
            type: 'MARK_ITEM_PAYMENT_CREATION_COMPLETED_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'MARK_ITEM_PAYMENT_CREATION_COMPLETED_FAILED';
        await itemService.update(item.id, item);

        // TODO: send sqs message: MARK_ITEM_PAYMENT_CREATION_COMPLETED_FAILED
        await sendSqsMessage({
            type: 'MARK_ITEM_PAYMENT_CREATION_COMPLETED_FAILED',
            data: { item: item },
        });
    }
}
