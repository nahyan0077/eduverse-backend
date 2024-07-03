import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllAssessmentsController = (dependencies: IDependencies) => {

    const {
        useCases: { getAllAssessmentsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getAllAssessmentsUseCase(dependencies)
                .execute();

            if(!result){
                throw new Error("Assessment retrievel failed");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Assessment retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}