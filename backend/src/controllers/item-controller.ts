import { ItemService, NFTCreationService, SolanaService } from '@services/index';
import { Request, Response } from 'express';

export class ItemController {
    async createItem(req: Request, res: Response) {
        const { item, userWalletAddress } = req.body;
        const user = (req as any).user;

        console.log('CREATE ITEM', item);

        const solanaService = new SolanaService();
        const tokenMintAddress = await solanaService.createTokenMint();

        const attributes = [];

        console.log('MINT ACCOUNT:', tokenMintAddress);

        const onChainMetadataUri = await solanaService.uploadMetadata({
            name: item.name,
            symbol: ``,
            description: item.description,
            image: item.coverArtImage,
            external_url: item.externalLink
        });

        console.log('METADATA URI:', onChainMetadataUri);

        const createTokenMintMetadataSignature = await solanaService.createTokenMintMetadata(tokenMintAddress, {
            name: item.name,
            symbol: '',
            uri: onChainMetadataUri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
        });

        console.log('METADATA MINT:', createTokenMintMetadataSignature);

        const mintToMasterSignature = await solanaService.mintTokenToMaster(tokenMintAddress);

        console.log('MINT TO MASTER:', mintToMasterSignature);

        const transferToCreatorSignature = await solanaService.transferTokenFromMaster(
            tokenMintAddress,
            userWalletAddress,
            1,
        );

        console.log('MINT TO CREATOR:', transferToCreatorSignature);

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
