import { MeService } from '@services/index';
import { Request, Response } from 'express';

export class MeController {
    async listCollections(req: Request, res: Response) {
        const username = (req as any).user.username;

        const meService = new MeService();
        const collections = await meService.listCollections(username);

        res.json({
            data: collections,
        });
    }
}
