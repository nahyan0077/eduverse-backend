import rateLimit from "express-rate-limit";
import { Request, Response } from "express";

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    handler: (req: Request, res: Response) => {
        res.status(429).json({
            error: 'Too many requests. Please try again later.'
        });
    }
});