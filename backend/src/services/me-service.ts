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

        const mapItems = items.reduce((prev, cur) => {
            prev[cur.itemID] = cur;
            return prev;
        }, {});

        const transformedCreations = creations.map((i) => ({
            ...i,
            item: mapItems[i.itemID] || null,
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
