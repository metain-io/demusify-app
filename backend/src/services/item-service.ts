import { ItemModel } from '@models/index';

export class ItemService {
    async createItem(data: any) {
        return await (await ItemModel.create(data)).save();
    }

    async listItems() {
        return await ItemModel.scan().limit(100).exec();
    }

    async getItem(id: string) {
        return (await ItemModel.query({ collectionID: id }).exec())?.[0];
    }

    async updateItem(id: string, data: any) {
        const collection = await this.getItem(id);

        if (!collection) {
            throw new Error('Item is not exists');
        }

        for (let key in data) {
            collection[key] = data[key];
        }

        return await collection.save();
    }

    async deleteItem(id: string) {
        const collection = await this.getItem(id);

        if (!collection) {
            throw new Error('Item is not exists');
        }

        return await collection.delete();
    }
}
