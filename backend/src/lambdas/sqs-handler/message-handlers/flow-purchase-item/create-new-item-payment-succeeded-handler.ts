import { NFTLicenseService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createNewItemPaymentSucceededHandler(data: any) {
    const { item } = data;
    const itemService = new NFTLicenseService();

    try {
        // TODO: validate payments instead of validate valid as default

        item.state = 'VALIDATED';
        await itemService.update(item.id, item);

        await sendSqsMessage({
            type: 'CHECK_ITEM_PAYMENT_VALIDATED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'CHECK_ITEM_PAYMENT_FAILED';
        await itemService.update(item.id, item);

        await sendSqsMessage({
            type: 'CHECK_ITEM_PAYMENT_FAILED',
            data: { item: item },
        });
    }
}
