import { ItemService, NFTLicenseService, SolanaService } from '@services/index';
import { Request, Response } from 'express';

export class PaymentController {
    async createPayment(req: Request, res: Response) {
        const { itemId, licenseId, paymentSignature, payerAddress } = req.body;
        const user = (req as any).user;

        const itemService = new ItemService();
        const item = await itemService.getItem(itemId);
        if (!item) {
            res.status(400).json({
                code: 401,
                message: 'Item not found',
            });
            return;
        }

        const selectedLicense = item?.licenseMonetizations?.find((l) => l.id == licenseId);
        if (!selectedLicense || !selectedLicense?.value) {
            res.status(400).json({
                code: 401,
                message: 'License not found',
            });
            return;
        }

        const solanaService = new SolanaService();

        const amountSolTransferedToCreator = selectedLicense.value * 0.9;
        const transferSolFromMasterSignature = await solanaService.transferSolFromMaster(
            item.creatorAddress,
            amountSolTransferedToCreator,
        );

        const amountTokenTransferedToPayer = 1;
        const transferTokenFromMasterSignature = await solanaService.transferTokenFromMaster(
            item.tokenMintAddress,
            payerAddress,
            amountTokenTransferedToPayer,
        );

        const nftLicenseData = {
            consumerID: user.username,
            txID: paymentSignature,
            nftID: item.tokenMintAddress,
            itemId,
            licenseId,
            price: selectedLicense.value,
            payerAddress,
            amountSolTransferedToCreator,
            amountTokenTransferedToPayer,
            transferSolFromMasterSignature,
            transferTokenFromMasterSignature,
        };
        const nftLicenseService = new NFTLicenseService();
        await nftLicenseService.create(nftLicenseData);

        res.json(nftLicenseData);
    }
}
