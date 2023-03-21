import { ItemPaymentService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemPaymentCreatedEventHandler(input: any) {
    const { item } = input;
    const itemPaymentService = new ItemPaymentService();

    try {
        // TODO: verify item payment
        item.state = 'VERIFIED';
        await itemPaymentService.updateItemPayment(item.customerID, item.txID, item);

        await sendSqsMessage({
            type: 'ITEM_PAYMENT_VERIFIED',
            input: { item },
        });
    } catch (error) {
        console.log('VERIFY_ITEM_PAYMENT_FAILED', item, error);

        item.state = 'VERIFY_ITEM_PAYMENT_FAILED';
        await itemPaymentService.updateItemPayment(item.customerID, item.txID, item);
    }
}
