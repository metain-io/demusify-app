import { NFTLicenseService, SolanaService } from '@services/index';
import { sendSqsMessage } from 'lambdas/sqs-handler/utils';

export async function itemTokenTransferedToPayerEventHandler(input: any) {
    const { item } = input;
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
        item.state = 'COMPLETED';
        await itemService.update(item.id, item);

        await sendSqsMessage({
            type: 'ITEM_PAYMENT_COMPLETED',
            input: { item },
        });
    } catch (error) {
        await sendSqsMessage({
            type: 'TRANSFER_SOL_TO_CREATOR_FAILED',
            input: { item, error },
        });
    }
}
