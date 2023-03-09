import { CreatorModel } from '@models/index';

export class CreatorService {
    async create(data: any) {
        return await (await CreatorModel.create(data)).save();
    }

    async list(limit = 100) {
        return await CreatorModel.scan().limit(limit).exec();
    }

    async get(username: string) {
        return (await CreatorModel.query({ username }).exec())?.[0];
    }

    async update(username: string, data: any) {
        const creator = await this.get(username);

        if (!creator) {
            throw new Error('Creator is not exists');
        }

        delete data['username'];

        for (let key in data) {
            creator[key] = data[key];
        }

        return await creator.save();
    }

    async delete(username: string) {
        const creator = await this.get(username);

        if (!creator) {
            throw new Error('Creator is not exists');
        }

        return await creator.delete();
    }
}
