import { Request, Response, NextFunction } from "express";
import { ErrorResponse, errorHandler } from "@eduverse/common";
import { findUserById } from "../../../infrastructure/database/mongo/respositories";


export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.user) {
        return next(ErrorResponse.unauthorized("unauthorized !req.user"));
    }
        
    const user = await findUserById(req.user._id);
    
    if (!user) {
        return next(ErrorResponse.unauthorized("unauthorized"));
    }

    if (user.role !== "admin") {
        return next(ErrorResponse.unauthorized("The role is not admin"));
    }
    
    next();
}