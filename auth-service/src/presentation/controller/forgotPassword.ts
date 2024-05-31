import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";


export const forgotPasswordController = (dependencies: IDependancies) => {
    const { useCases: {updatePasswordUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
   
        


    }
}