import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getInstructorsByStudentController = (dependancies: IDependencies) => {
    const { useCases: {getInstructorsByStudentUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {


            const result = await getInstructorsByStudentUseCase(dependancies).execute(req.params?.studentId)

            if (!result) {
                return res.status(200).json({
                    success: false,
                    message: "No intructors by this student"
                })
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "fetched students enrolled by instructor"
            })

        } catch (error: any) {
            next(error)
        }
    }
}