import { CollectionModel } from '@models/index';

export class MeService {
    async listCollections(username: string) {
        return await CollectionModel.scan().filter('username').eq(username).exec();
    }
}
