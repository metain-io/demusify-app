import { NFTLicenseService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function createNewItemPaymentSucceededHandler(data: any) {
    const { item } = data;
    const solanaService = new SolanaService();
    const itemService = new NFTLicenseService();

    try {
        const amountTokenTransferedToPayer = 1;
        const transferTokenFromMasterSignature = await solanaService.transferSolFromMaster(
            item.creatorAddress,
            amountTokenTransferedToPayer,
        );

        item.amountTokenTransferedToPayer = amountTokenTransferedToPayer;
        item.transferTokenFromMasterSignature = transferTokenFromMasterSignature;
        item.state = 'TRANSFER_TOKEN_TO_PAYER_SUCCEEDED';
        await itemService.update(item.id, item);

        // TODO: send sqs message: TRANSFER_TOKEN_TO_PAYER_SUCCEEDED
        await sendSqsMessage({
            type: 'TRANSFER_TOKEN_TO_PAYER_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'TRANSFER_TOKEN_TO_PAYER_FAILED';
        await itemService.update(item.id, item);

        // TODO: send sqs message: TRANSFER_TOKEN_TO_PAYER_FAILED
        await sendSqsMessage({
            type: 'TRANSFER_TOKEN_TO_PAYER_FAILED',
            data: { item: item },
        });
    }
}
