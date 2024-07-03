import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAssessmentsByInstructorIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getAssessmentsByInstructorIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const id = req.params.instructorId;

            const result = await getAssessmentsByInstructorIdUseCase(dependencies)
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