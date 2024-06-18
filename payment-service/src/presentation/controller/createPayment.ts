import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";


export const createPaymentSessionController = (dependencies: IDependencies) => {
    const { useCases: {createPaymentUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { instructorId, ...data } = req.body;

            const result = await createPaymentUseCase(dependencies).execute(req.body)

            if (!result) {
                throw new Error("payment failed!");
            }

            

        } catch (error: any) {
            
        }
    }
}