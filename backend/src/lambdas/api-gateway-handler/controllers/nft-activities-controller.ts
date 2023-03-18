import { NFTActivitiesService } from '@services/index';
import { Request, Response } from 'express';

export class NFTActivitiesController {
    async createNFTActivities(req: Request, res: Response) {
        const input = req.body;

        const nftActivitiesService = new NFTActivitiesService();
        const nftActivities = await nftActivitiesService.create(input);

        return res.json({
            data: nftActivities,
        });
    }

    async listNFTActivitiess(req: Request, res: Response) {
        const nftActivitiesService = new NFTActivitiesService();
        const nftActivities = await nftActivitiesService.list();

        return res.json({
            data: nftActivities,
        });
    }

    async getNFTActivities(req: Request, res: Response) {
        const { id } = req.params;

        const nftActivitiesService = new NFTActivitiesService();
        const nftActivities = await nftActivitiesService.get(id);

        return res.json({
            data: nftActivities,
        });
    }

    async getNFTActivitiesByUsername(req: Request, res: Response) {
        const { username } = req.params;

        const nftActivitiesService = new NFTActivitiesService();
        const nftActivities = await nftActivitiesService.getByUsername(username);

        return res.json({
            data: nftActivities,
        });
    }

    async updateNFTActivities(req: Request, res: Response) {
        const { username } = req.params;
        const input = req.body;

        const nftActivitiesService = new NFTActivitiesService();
        const nftActivities = await nftActivitiesService.update(username, input);

        return res.json({
            data: nftActivities,
        });
    }

    async deleteNFTActivities(req: Request, res: Response) {
        const { username } = req.params;

        const nftActivitiesService = new NFTActivitiesService();
        const result = await nftActivitiesService.delete(username);

        return res.json({
            data: result,
        });
    }
}
