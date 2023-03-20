import { NFTLicenseService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createItemPaymentCommandHandler(input: any) {
    const { item } = input;
    const itemPaymentService = new NFTLicenseService();

    try {
        item.state = 'PENDING';
        await itemPaymentService.create(item);

        await sendSqsMessage({
            type: 'ITEM_PAYMENT_CREATED',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'CREATE_ITEM_PAYMENT_FAILED',
            input: { item, error },
        });
    }
}
