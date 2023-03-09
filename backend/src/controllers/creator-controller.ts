import { CreatorService } from '@services/index';
import { Request, Response } from 'express';

export class CreatorController {
    async createCreator(req: Request, res: Response) {
        const input = req.body;

        const creatorService = new CreatorService();
        const creator = await creatorService.create(input);

        return res.json({
            data: creator,
        });
    }

    async listCreators(req: Request, res: Response) {
        const creatorService = new CreatorService();
        const creators = await creatorService.list();

        return res.json({
            data: creators,
        });
    }

    async getCreator(req: Request, res: Response) {
        const { username } = req.params;

        const creatorService = new CreatorService();
        const creator = await creatorService.get(username);

        return res.json({
            data: creator,
        });
    }

    async updateCreator(req: Request, res: Response) {
        const { username } = req.params;
        const input = req.body;
console.log('===== updateCreator: ')
console.log('===== username: ', username)
console.log('===== input: ', input, req.body, req.body?.username)
console.log('========================= ')

        const creatorService = new CreatorService();
        const creator = await creatorService.update(username, input);

        return res.json({
            data: creator,
        });
    }

    async deleteCreator(req: Request, res: Response) {
        const { username } = req.params;

        const creatorService = new CreatorService();
        const result = await creatorService.delete(username);

        return res.json({
            data: result,
        });
    }
}
