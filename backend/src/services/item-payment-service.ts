import { NFTLicenseModel } from '@models/index';

export class ItemPaymentService {
    async createItemPayment(data: any) {
        return await (await NFTLicenseModel.create(data)).save();
    }

    async getItemPayment(consumerId: string, txId: string) {
        return (await NFTLicenseModel.query({ consumerID: consumerId, txID: txId }).exec())?.[0];
    }

    async updateItemPayment(customerId: string, txId: string, data: any) {
        const itemPayment = await this.getItemPayment(customerId, txId);

        if (!itemPayment) {
            throw new Error('Item is not exists');
        }

        for (let key in data) {
            itemPayment[key] = data[key];
        }

        return await itemPayment.save();
    }
}
