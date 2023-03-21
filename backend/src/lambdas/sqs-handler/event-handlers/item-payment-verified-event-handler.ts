import { ItemPaymentService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemPaymentVerifiedEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemPaymentService = new ItemPaymentService();

    try {
        const amountTokenTransferedToPayer = 1;
        const transferTokenFromMasterSignature = await solanaService.transferSolFromMaster(
            item.payerAddress,
            amountTokenTransferedToPayer,
        );

        item.amountTokenTransferedToPayer = amountTokenTransferedToPayer;
        item.transferTokenFromMasterSignature = transferTokenFromMasterSignature;
        item.state = 'ITEM_TOKEN_TRANSFERED_TO_PAYER';
        await itemPaymentService.updateItemPayment(item.consumerID, item.txID, item);

        await sendSqsMessage({
            type: 'ITEM_TOKEN_TRANSFERED_TO_PAYER',
            input: { item },
        });
    } catch (error) {
        console.log('TRANSFER_ITEM_TOKEN_TO_PAYER_FAILED', item, error);

        item.state = 'TRANSFER_ITEM_TOKEN_TO_PAYER_FAILED';
        await itemPaymentService.updateItemPayment(item.consumerID, item.txID, item);
    }
}
