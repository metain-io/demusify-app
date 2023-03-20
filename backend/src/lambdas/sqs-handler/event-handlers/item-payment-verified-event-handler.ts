import { NFTLicenseService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemPaymentVerifiedEventHandler(input: any) {
    const { item } = input;
    const solanaService = new SolanaService();
    const itemPaymentService = new NFTLicenseService();

    try {
        const amountTokenTransferedToPayer = 1;
        const transferTokenFromMasterSignature = await solanaService.transferSolFromMaster(
            item.creatorAddress,
            amountTokenTransferedToPayer,
        );

        item.amountTokenTransferedToPayer = amountTokenTransferedToPayer;
        item.transferTokenFromMasterSignature = transferTokenFromMasterSignature;
        item.state = 'ITEM_TOKEN_TRANSFERED_TO_PAYER';
        await itemPaymentService.update(item.id, item);

        await sendSqsMessage({
            type: 'ITEM_TOKEN_TRANSFERED_TO_PAYER',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'TRANSFER_ITEM_TOKEN_TO_PAYER_FAILED',
            input: { item, error },
        });
    }
}
