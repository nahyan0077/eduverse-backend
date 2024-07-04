import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllResultsController = (dependencies: IDependencies) => {

    const {
        useCases: { getAllResultsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const result = await getAllResultsUseCase(dependencies)
                .execute();

            res.status(200).json({
                success: true,
                data: result,
                message: "results retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}