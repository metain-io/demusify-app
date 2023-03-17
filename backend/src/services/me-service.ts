import { CollectionModel, ItemModel, NFTCreationModel, NFTLicenseModel } from '@models/index';

export class MeService {
    async listCollections(username: string) {
        return await CollectionModel.scan().filter('username').eq(username).exec();
    }

    async listCreations(username: string) {
        const creations = await NFTCreationModel.query({ creatorID: username }).exec();
        const items = await ItemModel.scan('itemID')
            .in(creations.map((i) => i.itemID))
            .exec();

        const licenses = await NFTLicenseModel.scan('itemId')
            .in(items.map((i) => i.itemID))
            .exec();

        const mapSales = licenses.reduce((prev, cur) => {
            if (!prev[cur.itemId]) prev[cur.itemId] = 0;
            prev[cur.itemId]++;
            return prev;
        }, {});

        const mapRevenue = licenses.reduce((prev, cur) => {
            if (!prev[cur.itemId]) prev[cur.itemId] = cur.amountSolTransferedToCreator;
            prev[cur.itemId] += cur.amountSolTransferedToCreator;
            return prev;
        }, {});

        const mapItems = items.reduce((prev, cur) => {
            prev[cur.itemID] = cur;
            return prev;
        }, {});

        const transformedCreations = creations.map((i) => ({
            ...i,
            item: mapItems[i.itemID] || null,
            sales: mapSales[i.itemID] || 0,
            revenue: mapRevenue[i.itemID] || 0,
        }));

        return transformedCreations;
    }

    async listLicenses(username: string) {
        const licenses = await NFTLicenseModel.query({ consumerID: username }).exec();

        const items = await ItemModel.scan('itemID')
            .in(licenses.map((i) => i.itemId))
            .exec();

        const mapItems = items.reduce((prev, cur) => {
            prev[cur.itemID] = cur;
            return prev;
        }, {});

        const transformedLicenses = licenses.map((i) => ({
            ...i,
            item: mapItems[i.itemId] || null,
        }));

        return transformedLicenses;
    }
}
