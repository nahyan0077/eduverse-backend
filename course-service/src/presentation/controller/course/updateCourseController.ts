import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateCourseController = (depedencies: IDependencies) => {
    const { useCases: { updateCourseUseCase } } = depedencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const data = req.body

            console.log(data,"set update course data");
            

            const result = await updateCourseUseCase(depedencies).execute(data)

            if (!result) {
                throw new Error("Course updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Course updated!"
            });



        } catch (error: any) {
            next(error)
        }
    }
}