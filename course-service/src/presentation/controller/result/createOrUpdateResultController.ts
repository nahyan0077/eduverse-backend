import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createOrUpdateResultController = (dependencies: IDependencies) => {

    const {
        useCases: { createOrUpdateResultUseCase}
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const body = req.body;

            const result = await createOrUpdateResultUseCase(dependencies)
                .execute(body);

            res.status(200).json({
                success: true,
                data: result,
                message: "result created!"
            });

        } catch (error) {
            next(error);
        }
    }
}