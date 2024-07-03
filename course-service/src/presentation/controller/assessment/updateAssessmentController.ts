import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateAssessmentController = (dependencies: IDependencies) => {

    const {
        useCases: { updateAssessmentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            const result = await updateAssessmentUseCase(dependencies)
                .execute(data);

            if(!result){
                throw new Error("Assessment updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Assessment updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}