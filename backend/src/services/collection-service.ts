import { CollectionModel } from '@models/index';

export class CollectionService {
    async createCollection(data: any) {
        return await (await CollectionModel.create(data)).save();
    }

    async listCollections() {
        return await CollectionModel.query().exec();
    }

    async getCollection(id: string) {
        return await CollectionModel.query({ collectionID: id }).exec();
    }

    async updateCollection(id: string, data: any) {
        return await CollectionModel.update({ collectionID: id, ...data });
    }

    async deleteCollection(id: string) {
        return await CollectionModel.delete({ collectionID: id });
    }
}
