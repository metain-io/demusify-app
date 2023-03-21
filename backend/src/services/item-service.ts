import { ItemModel, NFTCreationModel, NFTLicenseModel } from '@models/index';

export class ItemService {
    async createItem(data: any) {
        return await (await ItemModel.create(data)).save();
    }

    async listItems() {
        return await ItemModel.scan().limit(100).exec();
    }

    async listCompletedItems() {
        return await ItemModel.scan('state').eq('COMPLETED').limit(100).exec();
    }

    async getItem(id: string) {
        return (await ItemModel.query({ itemID: id }).exec())?.[0];
    }

    async updateItem(id: string, data: any) {
        const item = await this.getItem(id);

        if (!item) {
            throw new Error('Item is not exists');
        }

        for (let key in data) {
            item[key] = data[key];
        }

        return await item.save();
    }

    async deleteItem(id: string) {
        const item = await this.getItem(id);

        if (!item) {
            throw new Error('Item is not exists');
        }

        return await item.delete();
    }

    async listItemTransactions(id: string) {
        const creations = await ItemModel.scan('itemID').eq(id).exec();
        const licenses = await NFTLicenseModel.scan('itemId').eq(id).exec();

        const result = [
            ...creations.map((i) => ({
                type: 'create',
                txId: i.mintToMasterSignature,
                createdAt: i.createdAt,
                state: i.state,
            })),
            ...licenses.map((i) => ({
                type: 'buy',
                txId: i.txID,
                createdAt: i.createdAt,
                price: i.price,
                state: i.state,
            })),
        ].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);

            if (dateA > dateB) return -1;
            if (dateA < dateB) return 1;
            return 0;
        });

        return result;
    }
}
