import { NextFunction } from 'connect';
import { Request, Response } from 'express';

export function logRequest(req: Request, res: Response, next: NextFunction) {
    const { url, body, params, query, headers, method, path, baseUrl, originalUrl } = req;
    console.log('Request', 'at', new Date(), '|', method, path);
    console.log({
        url,
        body,
        params,
        query,
        headers,
        method,
        path,
        baseUrl,
        originalUrl,
    });

    next();
}
