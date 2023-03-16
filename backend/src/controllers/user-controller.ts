import { NFTActivitiesService, NFTCreationService, NFTLicensedService } from '@services/index';
import { Request, Response } from 'express';

export class UserController {
    async getNftData(req: Request, res: Response) {
        const { username } = req.params;

        const nftLicensedService = new NFTLicensedService();
        const nftCreationService = new NFTCreationService();
        let nftActivities = [];
        
        let [nftLicensed, nftCreation] = await Promise.all([
            nftLicensedService.getAll(),
            nftCreationService.getByUsername(username),
        ]);

        nftCreation.forEach((item) => {
            let totalSale = 0
            let totalRevenue = 0
            let licensed = nftLicensed.find((i) => i.nftID === item.nftID)
            if (licensed) {
                licensed?.transactions?.forEach((tx) => {
                    totalSale++;
                    totalRevenue += tx.value || 0
                })
                item.transactions = licensed?.transactions || []
            }
            (item.totalSale = totalSale), (item.totalRevenue = totalRevenue);

            nftActivities.push({
                userID: item.creatorID,
                nftID: item.nftID,
                nftName: item?.detail?.name,
                coverArtImage: item?.detail?.coverArtImage,
                type: 'create',
                description: `created by ${item.creatorID.substring(0, 12)}`,
                createAt: item.createdAt
            })
        })

        nftLicensed
            .filter((item) => item.consumerID === username)
            .forEach((item) => {
                item?.transactions?.forEach((tx) => {
                    nftActivities.push({
                        userID: item.consumerID,
                        nftID: item.nftID,
                        nftName: item?.detail?.name,
                        coverArtImage: item?.detail?.coverArtImage,
                        type: 'license',
                        description: `sold for ${tx.value} SOL`,
                        createAt: tx.createTime,
                    });
                })
            });

        return res.json({
            data: {
                nftLicensed: nftLicensed?.filter((item) => item.consumerID === username) || [],
                nftCreation,
                nftActivities: nftActivities.sort((a, b) => a?.createAt || 0 - b?.createAt || 0),
            },
        });
    }
}
