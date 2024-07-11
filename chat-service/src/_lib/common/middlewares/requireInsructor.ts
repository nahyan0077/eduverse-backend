import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "@eduverse/common";
import { findUserById } from "../../../infrastructure/database/mongodb/repositories";

export const requireInstructor = async (req: Request, res: Response, next: NextFunction) => {
    
    if (!req.user) {
        return next(ErrorResponse.unauthorized("unauthorized"));
    }
        
    const user = await findUserById(req.user._id);
    
    if (!user) {
        return next(ErrorResponse.unauthorized("unauthorized"));
    }

    if (user.role !== "instructor") {
        return next(new Error("Access denied, Require Instructor"));
    }
    
    next();
}