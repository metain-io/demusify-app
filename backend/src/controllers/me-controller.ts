import { MeService } from '@services/index';
import { Request, Response } from 'express';

export class MeController {
    async listCollections(req: Request, res: Response) {
        const user = (req as any).user;

        const meService = new MeService();
        const collections = await meService.listCollections(user.username);

        res.json({
            data: collections,
        });
    }

    async listCreations(req: Request, res: Response) {
        const user = (req as any).user;

        const meService = new MeService();
        const creations = await meService.listCreations(user.username);

        res.json({
            data: creations,
        });
    }

    async listLicenses(req: Request, res: Response) {
        const user = (req as any).user;

        const meService = new MeService();
        const creations = await meService.listLicenses(user.username);

        res.json({
            data: creations,
        });
    }
}
