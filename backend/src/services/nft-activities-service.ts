import { NFTActivitiesModel } from '@models/index';

export class NFTActivitiesService {
    async create(data: any) {
        return await (await NFTActivitiesModel.create(data)).save();
    }

    async list(limit = 100) {
        return await NFTActivitiesModel.scan().limit(limit).exec();
    }

    async get(id: string) {
        return (await NFTActivitiesModel.query({ id }).exec())?.[0];
    }

    async getByUsername(username: string) {
        return [];//(await NFTActivitiesModel.query({ userID: username }).exec());
    }

    async update(username: string, data: any) {
        const NFTActivities = await this.get(username);

        if (!NFTActivities) {
            // throw new Error('NFTActivities is not exists');
            return await this.create({...data, username})
        }

        delete data['username'];

        for (let key in data) {
            NFTActivities[key] = data[key];
        }

        return await NFTActivities.save();
    }

    async delete(username: string) {
        const NFTActivities = await this.get(username);

        if (!NFTActivities) {
            throw new Error('NFTActivities is not exists');
        }

        return await NFTActivities.delete();
    }
}
