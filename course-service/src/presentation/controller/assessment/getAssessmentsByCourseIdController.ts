import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAssessmentsByCourseIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getAssessmentsByCourseIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const id = req.params.courseId;

            console.log("id--> check existing exam",id);
            

            const result = await getAssessmentsByCourseIdUseCase(dependencies)
                .execute(id);

            if(!result){
                return res.status(200).json({
                    success: false,
                    message: "No Assessments exists !"
                });
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "Assessments retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}