import { ItemModel } from '@models/index';

export class ItemService {
    async createItem(data: any) {
        return await (await ItemModel.create(data)).save();
    }

    async listItems() {
        return await ItemModel.query().exec();
    }

    async getItem(id: string) {
        return await ItemModel.query({ itemID: id }).exec();
    }

    async updateItem(id: string, data: any) {
        return await ItemModel.update({ itemID: id, ...data });
    }

    async deleteItem(id: string) {
        return await ItemModel.delete({ itemID: id });
    }
}
