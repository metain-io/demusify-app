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
        return (await CollectionModel.query({ collectionID: id }).exec())?.[0];
    }

    async updateCollection(id: string, data: any) {
        const collection = await this.getCollection(id);

        if (!collection) {
            throw new Error('Collection is not exists');
        }

        for (let key in data) {
            collection[key] = data[key];
        }

        return await collection.save();
    }

    async deleteCollection(id: string) {
        const collection = await this.getCollection(id);

        if (!collection) {
            throw new Error('Collection is not exists');
        }

        return await collection.delete();
    }
}
