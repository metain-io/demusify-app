import { ItemService, NFTCreationService, SolanaService } from '@services/index';
import { Request, Response } from 'express';

export class ItemController {
    async createItem(req: Request, res: Response) {
        const { item, userWalletAddress } = req.body;
        const user = (req as any).user;

        const solanaService = new SolanaService();
        const tokenMintAddress = await solanaService.createTokenMint();

        const attributes = [];

        const onChainMetadataUri = await solanaService.uploadMetadata({
            attributes,
            name: item.name,
            symbol: ``,
            description: item.description,
            image: item.coverArtImage,
            seller_fee_basis_points: 0,
            external_url: item.externalLink,
            properties: {
                files: [
                    {
                        type: 'audio/mpeg',
                        uri: item.music,
                    },
                ],
            },
        });

        const createTokenMintMetadataSignature = await solanaService.createTokenMintMetadata(tokenMintAddress, {
            name: item.name,
            symbol: '',
            uri: onChainMetadataUri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
        });

        const mintToMasterSignature = await solanaService.mintTokenToMaster(tokenMintAddress);

        const transferToCreatorSignature = await solanaService.transferTokenFromMaster(
            tokenMintAddress,
            userWalletAddress,
            1,
        );

        const itemService = new ItemService();
        const createdItem = await itemService.createItem({
            ...item,
            username: user.username,
            tokenMintAddress: tokenMintAddress,
            creatorAddress: userWalletAddress,
        });

        const nftCreationService = new NFTCreationService();
        await nftCreationService.createNFTCreation({
            creatorID: user.username,
            nftID: tokenMintAddress,
            itemID: item.itemID,
            mintToMasterSignature: mintToMasterSignature,
            transferToCreatorSignature: transferToCreatorSignature,
        });

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

    async listItemTransactions(req: Request, res: Response) {
        const { itemId } = req.params;

        const itemService = new ItemService();
        const result = await itemService.listItemTransactions(itemId);

        res.json({
            data: result,
        });
    }
}
