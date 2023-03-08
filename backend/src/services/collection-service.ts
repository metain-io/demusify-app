import { CollectionModel } from '@models/index';
import { v4 as Uuid } from 'uuid';

export class CollectionService {
    async createCollection(data: any) {
        data = {
            collectionID: Uuid(),
            ...data,
        };

        return await (await CollectionModel.create(data)).save();
    }

    async listCollections() {
        return await CollectionModel.scan().limit(100).exec();
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
