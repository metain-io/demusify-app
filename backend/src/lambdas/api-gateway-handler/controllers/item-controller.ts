import { ItemService, NFTCreationService, SolanaService } from '@services/index';
import { Request, Response } from 'express';
import { sendSqsMessage } from '../utils';

export class ItemController {
    async createItemTokenMint(req: Request, res: Response) {
        const solanaService = new SolanaService();
        const tokenMintAddress = await solanaService.createTokenMint();

        res.json({
            data: tokenMintAddress,
        });
    }

    async createItemTokenMintMetadata(req: Request, res: Response) {
        const { item } = req.body;

        const solanaService = new SolanaService();

        const onChainMetadataUri = await solanaService.uploadMetadata({
            name: item.name,
            symbol: ``,
            description: item.description,
            image: item.coverArtImage,
            external_url: item.externalLink,
        });

        const createTokenMintMetadataSignature = await solanaService.createTokenMintMetadata(item.tokenMintAddress, {
            name: item.name,
            symbol: '',
            uri: onChainMetadataUri,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
        });

        res.json({
            data: { onChainMetadataUri, createTokenMintMetadataSignature },
        });
    }

    async mintItemToken(req: Request, res: Response) {
        const { item } = req.body;

        const solanaService = new SolanaService();
        const mintToMasterSignature = await solanaService.mintTokenToMaster(item.tokenMintAddress);

        const transferToCreatorSignature = await solanaService.transferTokenFromMaster(
            item.tokenMintAddress,
            item.creatorAddress,
            1,
        );

        res.json({
            data: { mintToMasterSignature, transferToCreatorSignature },
        });
    }

    async createItem(req: Request, res: Response) {
        const user = (req as any).user;
        const { item } = req.body;

        const itemService = new ItemService();
        const createdItem = await itemService.createItem({
            ...item,
            username: user.username,
        });

        const nftCreationService = new NFTCreationService();
        await nftCreationService.createNFTCreation({
            creatorID: user.username,
            nftID: item.tokenMintAddress,
            itemID: item.itemID,
            mintToMasterSignature: item.mintToMasterSignature,
            transferToCreatorSignature: item.transferToCreatorSignature,
        });

        res.json({
            data: createdItem,
        });
    }

    async createItemV2(req: Request, res: Response) {
        const user = (req as any).user;
        const { item } = req.body;

        const itemService = new ItemService();
        const createdItem = await itemService.createItem({
            ...item,
            username: user.username,
            state: 'PENDING',
        });

        await sendSqsMessage({
            type: 'CREATE_NEW_ITEM_SUCCEEDED',
            data: { item: createdItem },
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
