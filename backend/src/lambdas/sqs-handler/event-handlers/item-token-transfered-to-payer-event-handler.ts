import { ItemPaymentService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemTokenTransferedToPayerEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemPaymentService = new ItemPaymentService();

    try {
        const amountSolTransferedToCreator = item.price * 0.9;
        const transferSolFromMasterSignature = await solanaService.transferSolFromMaster(
            item.creatorAddress,
            amountSolTransferedToCreator,
        );

        item.amountSolTransferedToCreator = amountSolTransferedToCreator;
        item.transferSolFromMasterSignature = transferSolFromMasterSignature;
        item.state = 'COMPLETED';
        await itemPaymentService.updateItemPayment(item.customerID, item.txID, item);

        await sendSqsMessage({
            type: 'ITEM_PAYMENT_COMPLETED',
            input: { item },
        });
    } catch (error) {
        console.log('TRANSFER_SOL_TO_CREATOR_FAILED', item, error);

        item.state = 'TRANSFER_SOL_TO_CREATOR_FAILED';
        await itemPaymentService.updateItemPayment(item.customerID, item.txID, item);
    }
}
