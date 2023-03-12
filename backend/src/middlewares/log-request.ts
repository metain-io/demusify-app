import { NextFunction } from 'connect';
import { Request, Response } from 'express';

export function logRequest(req: Request, res: Response, next: NextFunction) {
    const { url, body, query, headers, method, path, originalUrl } = req;

    console.log('Request', method, path, {
        url,
        originalUrl,
        headers,
        query,
        body: JSON.stringify(body),
    });

    next();
}
