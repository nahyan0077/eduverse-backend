import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAssessmentByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getAssessmentByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const id = req.params.id;

            const result = await getAssessmentByIdUseCase(dependencies)
                .execute(id);

            if(!result){
                throw new Error("Assessment retrievel failed");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Assessments retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}