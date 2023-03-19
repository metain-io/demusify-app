import { ItemService } from '@services/index';
import { Request, Response } from 'express';
import { sendSqsMessage } from '../utils';

export class ItemController {
    async createItem(req: Request, res: Response) {
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
