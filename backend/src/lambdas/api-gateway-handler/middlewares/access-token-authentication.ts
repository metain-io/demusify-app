import { AuthService } from '@services/index';
import { NextFunction, Request, Response } from 'express';

export async function accessTokenAuthentication(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers['x-access-token'];

    if (!accessToken) {
        return res.status(401).json({
            code: 401,
            message: 'Authenticate failed: accessToken is missing',
        });
    }

    if (typeof accessToken != 'string') {
        return res.status(401).json({
            code: 401,
            message: 'Authenticate failed: accessToken is invalid',
        });
    }

    try {
        const authService = new AuthService();
        const user = await authService.authenticateAccessToken(accessToken);
        (req as any).user = user;
        next();
    } catch (error: any) {
        return res.status(401).json({
            code: 401,
            message: error.message,
        });
    }
}
