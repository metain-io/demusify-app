import { ItemPaymentService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createItemPaymentCommandHandler(input: any) {
    const { item } = input;
    const itemPaymentService = new ItemPaymentService();

    try {
        item.state = 'PENDING';
        await itemPaymentService.createItemPayment(item);

        await sendSqsMessage({
            type: 'ITEM_PAYMENT_CREATED',
            input: { item },
        });
    } catch (error) {
        console.log('CREATE_ITEM_PAYMENT_FAILED', item, error);
    }
}
