import { ItemModel, NFTLicenseModel } from '@models/index';

export class NFTLicenseService {
    async createNFTLicense(data: any) {
        return await (await NFTLicenseModel.create(data)).save();
    }

    async listNFTLicenses() {
        return await NFTLicenseModel.scan().limit(100).exec();
    }

    async create(data: any) {
        return await (await NFTLicenseModel.create(data)).save();
    }

    async list(limit = 100) {
        return await NFTLicenseModel.scan().limit(limit).exec();
    }

    async get(id: string) {
        return (await NFTLicenseModel.query({ id }).exec())?.[0];
    }

    async getByUsername(username: string) {
        const rs = await this.getAll();
        return rs?.filter((item) => item.creatorID === username) || [];
    }

    async getAll() {
        const [creations, items] = await Promise.all([NFTLicenseModel.scan().exec(), ItemModel.scan().exec()]);

        creations?.forEach((creation) => {
            let item = items.find((value) => value.tokenMintAddress === creation.nftID);
            creation.detail = item || {};
        });

        return creations;
    }

    async update(username: string, data: any) {
        const NFTLicense = await this.get(username);

        if (!NFTLicense) {
            // throw new Error('NFTLicense is not exists');
            return await this.create({ ...data, username });
        }

        delete data['username'];

        for (let key in data) {
            NFTLicense[key] = data[key];
        }

        return await NFTLicense.save();
    }

    async delete(username: string) {
        const NFTLicense = await this.get(username);

        if (!NFTLicense) {
            throw new Error('NFTLicense is not exists');
        }

        return await NFTLicense.delete();
    }
}
