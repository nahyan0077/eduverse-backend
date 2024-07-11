import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getResultByUseIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getResultByUserIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const userId = req.params?.userId;

            const result = await getResultByUserIdUseCase(dependencies)
                .execute(userId);

            if (!result) {
                
                return res.status(200).json({
                    success: false,
                    message: "results retrieval failed..!"
                });
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "results retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}