import { ItemModel } from '@models/index';

export class ItemService {
    async createItem(data: any) {
        return await (await ItemModel.create(data)).save();
    }

    async listItems() {
        return await ItemModel.scan().limit(100).exec();
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
}
