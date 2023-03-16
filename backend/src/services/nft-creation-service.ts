import { NFTCreationModel } from '@models/index';

export class NFTCreationService {
    async createNFTCreation(data: any) {
        return await (await NFTCreationModel.create(data)).save();
    }

    async listNFTCreations() {
        return await NFTCreationModel.scan().limit(100).exec();
    }

    async create(data: any) {
        return await (await NFTCreationModel.create(data)).save();
    }

    async list(limit = 100) {
        return await NFTCreationModel.scan().limit(limit).exec();
    }

    async get(id: string) {
        return (await NFTCreationModel.query({ id }).exec())?.[0];
    }

    async getByUsername(username: string) {
        return await NFTCreationModel.query({ creatorID: username }).exec();
    }

    async update(username: string, data: any) {
        const NFTCreation = await this.get(username);

        if (!NFTCreation) {
            // throw new Error('NFTCreation is not exists');
            return await this.create({ ...data, username });
        }

        delete data['username'];

        for (let key in data) {
            NFTCreation[key] = data[key];
        }

        return await NFTCreation.save();
    }

    async delete(username: string) {
        const NFTCreation = await this.get(username);

        if (!NFTCreation) {
            throw new Error('NFTCreation is not exists');
        }

        return await NFTCreation.delete();
    }
}
