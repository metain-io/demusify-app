import { CollectionService } from '@services/index';
import { Request, Response } from 'express';

export class CollectionController {
    async createCollection(req: Request, res: Response) {
        const username = (req as any).user.username;

        const collectionService = new CollectionService();
        const collection = await collectionService.createCollection({ username });

        res.json({
            data: collection,
        });
    }

    async listCollections(req: Request, res: Response) {
        const collectionService = new CollectionService();
        const collections = await collectionService.listCollections();

        res.json({
            data: collections,
        });
    }

    async getCollection(req: Request, res: Response) {
        const { collectionId } = req.params;

        const collectionService = new CollectionService();
        const collection = await collectionService.getCollection(collectionId);

        res.json({
            data: collection,
        });
    }

    async updateCollection(req: Request, res: Response) {
        const { collectionId } = req.params;
        const input = req.body;

        const collectionService = new CollectionService();
        const collection = await collectionService.updateCollection(collectionId, input);

        res.json({
            data: collection,
        });
    }

    async deleteCollection(req: Request, res: Response) {
        const { collectionId } = req.params;

        const collectionService = new CollectionService();
        const result = await collectionService.deleteCollection(collectionId);

        res.json({
            data: result,
        });
    }
}
