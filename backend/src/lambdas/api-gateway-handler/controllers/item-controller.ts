import { ItemService } from '@services/index';
import { Request, Response } from 'express';
import { sendSqsMessage } from '../utils';

export class ItemController {
    async createItem(req: Request, res: Response) {
        const user = (req as any).user;
        const { item } = req.body;

        const itemData = {
            ...item,
            username: user.username,
        };

        await sendSqsMessage({
            type: 'CREATE_ITEM',
            input: { item: itemData },
        });

        res.json({ success: true });
    }

    async listItems(req: Request, res: Response) {
        const itemService = new ItemService();
        const items = await itemService.listCompletedItems();

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
