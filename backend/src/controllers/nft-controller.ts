import { NFTService } from '@services/index';
import { Request, Response } from 'express';

export class MintController {
  async mint(req: Request, res: Response) {
    const input = req.body;

    // TODO: @quang fills this
    const userWallet = '...';

    const mintService = new NFTService();
    const item = await mintService.createItem(userWallet, input);

    res.json({
        data: item,
    });
  }
}
