import { CollectionModel, ItemModel, NFTCreationModel, NFTLicenseModel } from '@models/index';

export class MeService {
    async listCollections(username: string) {
        return await CollectionModel.scan().filter('username').eq(username).exec();
    }

    async listCreations(username: string) {
        const items = await (
            await ItemModel.scan({ username }).exec()
        ).sort((a, b) => {
            if (a.createdAt < b.createdAt) return 1;
            if (a.createdAt > b.createdAt) return -1;
            return 0;
        });

        const itemPayments = await NFTLicenseModel.scan('itemId')
            .in(items.map((i) => i.itemID))
            .exec();

        const mapSales = itemPayments.reduce((prev, cur) => {
            if (!prev[cur.itemId]) prev[cur.itemId] = 0;
            prev[cur.itemId]++;
            return prev;
        }, {});

        const mapRevenue = itemPayments.reduce((prev, cur) => {
            if (!prev[cur.itemId]) prev[cur.itemId] = cur.amountSolTransferedToCreator;
            prev[cur.itemId] += cur.amountSolTransferedToCreator;
            return prev;
        }, {});

        const transformedItem = items.map((i) => ({
            ...i,
            sales: mapSales[i.itemID] || 0,
            revenue: mapRevenue[i.itemID] || 0,
        }));

        return transformedItem;
    }

    async listLicenses(username: string) {
        const itemPayments = await NFTLicenseModel.query({ consumerID: username }).exec();

        itemPayments.sort((a, b) => {
            if (a.createdAt < b.createdAt) return 1;
            if (a.createdAt > b.createdAt) return -1;
            return 0;
        });

        const items = await ItemModel.scan('itemID')
            .in(itemPayments.map((i) => i.itemId))
            .exec();

        const mapItems = items.reduce((prev, cur) => {
            prev[cur.itemID] = cur;
            return prev;
        }, {});

        const transformedItemPayments = itemPayments.map((i) => ({
            ...i,
            item: mapItems[i.itemId] || null,
        }));

        return transformedItemPayments;
    }
}
