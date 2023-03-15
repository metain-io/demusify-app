import { NFTActivitiesService, NFTCreationService, NFTLicensedService } from '@services/index';
import { Request, Response } from 'express';

export class UserController {
    async getNftData(req: Request, res: Response) {
        const { username } = req.params;

        const nftLicensedService = new NFTLicensedService();
        const nftCreationService = new NFTCreationService();
        const nftActivitiesService = new NFTActivitiesService();
        
        const [nftLicensed, nftCreation, nftActivities] = await Promise.all([
            nftLicensedService.getByUsername(username),
            nftCreationService.getByUsername(username),
            nftActivitiesService.getByUsername(username),
        ]);

        return res.json({
            data: {
                nftLicensed,
                nftCreation,
                nftActivities
            },
        });
    }
}
