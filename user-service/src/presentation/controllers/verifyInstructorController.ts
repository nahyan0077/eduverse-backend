import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";


export const verfiyInstructorController = (dependencies: IDependencies) => {
    const { useCases: {verifyInstructorUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.body

            

        } catch (error: any) {
            
        }
    }
}