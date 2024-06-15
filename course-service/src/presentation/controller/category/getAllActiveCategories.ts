import ErrorResponse from "../../../_lib/common/error/errorResponse";
import { IDependencies } from "../../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllActiveCategoriesController = (dependencies: IDependencies) => {
    const { useCases : {getAllActiveCategoriesUseCase} } = dependencies
    return  async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("get all active category");
            
            const result = await getAllActiveCategoriesUseCase(dependencies).execute()
            if(!result){
                throw ErrorResponse.internalError ("Acitve Categories retrievel failed");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Categories retrieved!"
            });
        } catch (error: any) {
            next(error)
        }
    }
}