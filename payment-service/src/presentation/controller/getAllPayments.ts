import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllPaymentsController = (dependencies: IDependencies) => {
    const { useCases: {getAllPaymentsUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result  = await getAllPaymentsUseCase(dependencies).execute()

            if(!result){
                return res.status(200).json({
                    success: false,
                    message: "All Payments fetch failed"
                })
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "all Payments fetched"
            })

        } catch (error: any) {
            
        }
    }
}