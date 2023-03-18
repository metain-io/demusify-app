import { NFTLicensedService } from '@services/index';
import { Request, Response } from 'express';

export class NFTLicensedController {
    async createNFTLicensed(req: Request, res: Response) {
        const input = req.body;

        const nftLicensedService = new NFTLicensedService();
        const nftLicensed = await nftLicensedService.create(input);

        return res.json({
            data: nftLicensed,
        });
    }

    async listNFTLicensed(req: Request, res: Response) {
        const nftLicensedService = new NFTLicensedService();
        const nftLicenseds = await nftLicensedService.list();

        return res.json({
            data: nftLicenseds,
        });
    }

    async getNFTLicensed(req: Request, res: Response) {
        const { id } = req.params;

        const nftLicensedService = new NFTLicensedService();
        const nftLicensed = await nftLicensedService.get(id);

        return res.json({
            data: nftLicensed,
        });
    }

    async getNFTLicensedByUsername(req: Request, res: Response) {
        const { username } = req.params;

        const nftLicensedService = new NFTLicensedService();
        const nftLicensed = await nftLicensedService.getByUsername(username);

        return res.json({
            data: nftLicensed,
        });
    }

    async updateNFTLicensed(req: Request, res: Response) {
        const { username } = req.params;
        const input = req.body;

        const nftLicensedService = new NFTLicensedService();
        const nftLicensed = await nftLicensedService.update(username, input);

        return res.json({
            data: nftLicensed,
        });
    }

    async deleteNFTLicensed(req: Request, res: Response) {
        const { username } = req.params;

        const nftLicensedService = new NFTLicensedService();
        const result = await nftLicensedService.delete(username);

        return res.json({
            data: result,
        });
    }
}
