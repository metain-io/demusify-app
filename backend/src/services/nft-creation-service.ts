import { ItemModel, NFTCreationModel } from '@models/index';

export class NFTCreationService {
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
        const rs = await this.getAll();
        return rs?.filter((item) => item.creatorID === username) || [];
    }

    async getAll() {
        const [creations, items] = await Promise.all([NFTCreationModel.scan().exec(), ItemModel.scan().exec()]);

        creations?.forEach((creation) => {
            let item = items.find((value) => value.tokenMintAddress === creation.nftID);
            creation.detail = item || {};
        });

        return creations;
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
