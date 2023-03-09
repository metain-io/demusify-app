import { CreatorModel } from '@models/index';

export class CreatorService {
    async create(data: any) {
        return await (await CreatorModel.create(data)).save();
    }

    async list(limit = 100) {
        return await CreatorModel.scan().limit(limit).exec();
    }

    async get(username: string) {
        console.log('=== username: ', username)
        return await CreatorModel.query({ username: username }).exec();
    }

    async update(username: string, data: any) {
        return await CreatorModel.update({ username: username, ...data });
    }

    async delete(username: string) {
        return await CreatorModel.delete({ username: username });
    }
}
