import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createAssessmentController = (dependencies: IDependencies) => {

    const {
        useCases: { createAssessmentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await createAssessmentUseCase(dependencies)
                .execute(data);

            if(!result){
                return res.status(200).json({
                    success: false,
                    data: result,
                    message: "Assessment creation failed!"
                });
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "Assessment created!"
            });

        } catch (error) {
            next(error);
        }
    }
}