import { CollectionService } from '@services/index';
import { Request, Response } from 'express';

export class CollectionController {
    async createCollection(req: Request, res: Response) {
        const input = req.body;

        const collectionService = new CollectionService();
        const collection = await collectionService.createCollection(input);

        return res.json({
            data: collection,
        });
    }

    async listCollections(req: Request, res: Response) {
        const collectionService = new CollectionService();
        const collections = await collectionService.listCollections();

        return res.json({
            data: collections,
        });
    }

    async getCollection(req: Request, res: Response) {
        const { collectionId } = req.params;

        const collectionService = new CollectionService();
        const collection = await collectionService.getCollection(collectionId);

        return res.json({
            data: collection,
        });
    }

    async updateCollection(req: Request, res: Response) {
        const { collectionId } = req.params;
        const input = req.body;

        const collectionService = new CollectionService();
        const collection = await collectionService.updateCollection(collectionId, input);

        return res.json({
            data: collection,
        });
    }

    async deleteCollection(req: Request, res: Response) {
        const { collectionId } = req.params;

        const collectionService = new CollectionService();
        const result = await collectionService.deleteCollection(collectionId);

        return res.json({
            data: result,
        });
    }
}
