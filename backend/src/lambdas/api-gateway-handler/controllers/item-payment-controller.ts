import { ItemService } from '@services/index';
import { Request, Response } from 'express';
import { sendSqsMessage } from '../utils';

export class ItemPaymentController {
    async createItemPayment(req: Request, res: Response) {
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

        const itemData = {
            consumerID: user.username,
            txID: paymentSignature,
            nftID: item.tokenMintAddress,
            tokenMintAddress: item.tokenMintAddress,
            itemId,
            licenseId,
            price: selectedLicense.value,
            payerAddress,
            creatorAddress: item.creatorAddress,
        };

        await sendSqsMessage({
            type: 'CREATE_ITEM_PAYMENT',
            input: { item: itemData },
        });

        res.json({ success: true });
    }
}
