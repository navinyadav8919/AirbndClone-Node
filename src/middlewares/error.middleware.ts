import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error.ts";

export const genericErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    return res.status(err?.statusCode || 500).json({
        success: false,
        message: err?.message || "Internal Server Error",
    });
};