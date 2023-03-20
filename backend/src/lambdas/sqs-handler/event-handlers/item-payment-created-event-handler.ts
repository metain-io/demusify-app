import { NFTLicenseService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemPaymentCreatedEventHandler(input: any) {
    const { item } = input;
    const itemPaymentService = new NFTLicenseService();

    try {
        // TODO: verify item payment
        item.state = 'VERIFIED';
        await itemPaymentService.update(item.id, item);

        await sendSqsMessage({
            type: 'ITEM_PAYMENT_VERIFIED',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'VERIFY_ITEM_PAYMENT_FAILED',
            input: { item, error },
        });
    }
}
