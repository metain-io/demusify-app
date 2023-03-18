import { NFTCreationService } from '@services/index';
import { Request, Response } from 'express';

export class NFTCreationController {
    async createNFTCreation(req: Request, res: Response) {
        const input = req.body;

        const nftCreationService = new NFTCreationService();
        const nftCreation = await nftCreationService.create(input);

        return res.json({
            data: nftCreation,
        });
    }

    async listNFTCreations(req: Request, res: Response) {
        const nftCreationService = new NFTCreationService();
        const nftCreations = await nftCreationService.list();

        return res.json({
            data: nftCreations,
        });
    }

    async getNFTCreation(req: Request, res: Response) {
        const { id } = req.params;

        const nftCreationService = new NFTCreationService();
        const nftCreation = await nftCreationService.get(id);

        return res.json({
            data: nftCreation,
        });
    }

    async getNFTCreationByUsername(req: Request, res: Response) {
        const { username } = req.params;

        const nftCreationService = new NFTCreationService();
        const nftCreation = await nftCreationService.getByUsername(username);

        return res.json({
            data: nftCreation,
        });
    }

    async updateNFTCreation(req: Request, res: Response) {
        const { username } = req.params;
        const input = req.body;

        const nftCreationService = new NFTCreationService();
        const nftCreation = await nftCreationService.update(username, input);

        return res.json({
            data: nftCreation,
        });
    }

    async deleteNFTCreation(req: Request, res: Response) {
        const { username } = req.params;

        const nftCreationService = new NFTCreationService();
        const result = await nftCreationService.delete(username);

        return res.json({
            data: result,
        });
    }
}
