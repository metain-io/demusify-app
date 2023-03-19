import { NFTLicenseService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function transferTokenToPayerSucceededHandler(data: any) {
    const { item } = data;
    const solanaService = new SolanaService();
    const itemService = new NFTLicenseService();

    try {
        const amountSolTransferedToCreator = item.price * 0.9;
        const transferSolFromMasterSignature = await solanaService.transferSolFromMaster(
            item.creatorAddress,
            amountSolTransferedToCreator,
        );

        item.amountSolTransferedToCreator = amountSolTransferedToCreator;
        item.transferSolFromMasterSignature = transferSolFromMasterSignature;
        item.state = 'SOL_TRANSFERED_TO_CREATOR';
        await itemService.update(item.id, item);

        await sendSqsMessage({
            type: 'TRANSFER_SOL_TO_CREATOR_SUCCEEDED',
            data: { item: item },
        });
    } catch (error) {
        item.state = 'TRANSFER_SOL_TO_CREATOR_FAILED';
        await itemService.update(item.id, item);

        await sendSqsMessage({
            type: 'TRANSFER_SOL_TO_CREATOR_FAILED',
            data: { item: item },
        });
    }
}
