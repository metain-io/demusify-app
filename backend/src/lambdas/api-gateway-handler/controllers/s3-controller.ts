import { AwsS3Service } from '@services/index';
import { Request, Response } from 'express';
import { v4 as Uuid } from 'uuid';

export class S3Controller {
    async getSignedUrl(req: Request, res: Response) {
        const user = (req as any).user;
        const { fileType } = req.query;
        const key = `${user.username}/${Uuid()}`;
        const awsS3Service = new AwsS3Service();
        const result = await awsS3Service.getSignedUrl(key, fileType as string);

        res.json(result);
    }
}
