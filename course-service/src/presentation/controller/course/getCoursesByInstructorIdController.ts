import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";


export const getCoursesByInstructorIdController = (dependancies: IDependencies) => {
    const { useCases: {getCoursesByInstructorIdUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const instructorId = req.params.instructorId?.toString() as string

            const result = await getCoursesByInstructorIdUseCase(dependancies).execute(instructorId)
            

            if (!result) {
                return res.status(200).json({
                    success: false,
                    message: "No courses found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Courses fetched",
                data: result,
                totalCourses : result.length
            })

        } catch (error: any) {
            
        }
    } 
}