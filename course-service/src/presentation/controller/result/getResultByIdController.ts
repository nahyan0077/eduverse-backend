import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getResultByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getResultByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const id = req.params?.id;

            const result = await getResultByIdUseCase(dependencies)
                .execute(id);

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