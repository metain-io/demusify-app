import { ItemService, NFTCreationService } from '@services/index';
import { NFTService } from '@services/nft-service';
import { Request, Response } from 'express';

export class ItemController {
    async createItem(req: Request, res: Response) {
        const { item, userWalletAddress } = req.body;
        const user = (req as any).user;

        const itemService = new ItemService();
        const createdItem = await itemService.createItem({ username: user.username, ...item });

        const nftService = new NFTService();
        const { tokenMint, creationSignature } = await nftService.createItem(userWalletAddress);
        console.log({ tokenMint, creationSignature });

        // const nftCreationService = new NFTCreationService();
        // await nftCreationService.createNFTCreation({
        //     creatorID: user.username,
        //     nftID: tokenMint.publicKey.toBase58(),
        //     txID: creationSignature.publicKey.toBase58(),
        // });

        res.json({
            data: createdItem,
        });
    }

    async listItems(req: Request, res: Response) {
        const itemService = new ItemService();
        const items = await itemService.listItems();

        res.json({
            data: items,
        });
    }

    async getItem(req: Request, res: Response) {
        const { itemId } = req.params;

        const itemService = new ItemService();
        const item = await itemService.getItem(itemId);

        res.json({
            data: item,
        });
    }

    async updateItem(req: Request, res: Response) {
        const { itemId } = req.params;
        const input = req.body;

        const itemService = new ItemService();
        const item = await itemService.updateItem(itemId, input);

        res.json({
            data: item,
        });
    }

    async deleteItem(req: Request, res: Response) {
        const { itemId } = req.params;

        const itemService = new ItemService();
        const result = await itemService.deleteItem(itemId);

        res.json({
            data: result,
        });
    }
}
