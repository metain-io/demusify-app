import { NFTLicensedModel } from '@models/index';

export class NFTLicensedService {
    async create(data: any) {
        return await (await NFTLicensedModel.create(data)).save();
    }

    async list(limit = 100) {
        return await NFTLicensedModel.scan().limit(limit).exec();
    }

    async get(id: string) {
        return (await NFTLicensedModel.query({ id }).exec())?.[0];
    }

    async getByUsername(username: string) {
        return (await NFTLicensedModel.query({ consumerID: username }).exec());
    }

    async update(username: string, data: any) {
        const NFTLicensed = await this.get(username);

        if (!NFTLicensed) {
            // throw new Error('NFTLicensed is not exists');
            return await this.create({...data, username})
        }

        delete data['username'];

        for (let key in data) {
            NFTLicensed[key] = data[key];
        }

        return await NFTLicensed.save();
    }

    async delete(username: string) {
        const NFTLicensed = await this.get(username);

        if (!NFTLicensed) {
            throw new Error('NFTLicensed is not exists');
        }

        return await NFTLicensed.delete();
    }
}
