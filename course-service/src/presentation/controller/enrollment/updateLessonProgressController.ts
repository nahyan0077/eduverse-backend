import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateLessonProgressController = (dependancies: IDependencies) => {
    const { useCases: {updateLessonProgressUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {enrollmentId, lessonId, totalLessons} = req.body

            console.log(req.body,"reach lesson porg update");
            

            const result = await updateLessonProgressUseCase(dependancies).execute(enrollmentId, lessonId, totalLessons)

            if (!result) {
                return res.status(200).json({
                    success: false,
                    data: {},
                    message: "Progress updation failed"
                })
            }

             res.status(200).json({
                success: true,
                data: result,
                message: "Lesson progress updated"
             })
        } catch (error: any) {
            next(error)
        }
    }
}