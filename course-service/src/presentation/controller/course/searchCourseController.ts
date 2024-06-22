import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const searchCourseController = (dependancies : IDependencies) => {
    const { useCases: {searchCourseUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) =>{
        try {
            const query = req.query?.query as string

            const result = await searchCourseUseCase(dependancies).execute(query)            

            if (!result) {
                return res.status(200).json({
                    success: false,
                    data: {},
                    message: "Course not available"
                })
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "Searched courses fetched"
            })

        } catch (error: any) {
            next(error)
        }
    }
}