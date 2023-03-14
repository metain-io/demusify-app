import { NFTCreationModel } from '@models/index';

export class NFTCreationService {
    async createNFTCreation(data: any) {
        return await (await NFTCreationModel.create(data)).save();
    }

    async listNFTCreations() {
        return await NFTCreationModel.scan().limit(100).exec();
    }
}
