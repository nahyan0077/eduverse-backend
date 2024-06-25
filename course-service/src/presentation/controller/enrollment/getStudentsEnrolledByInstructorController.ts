import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getStudentsEnrolledByInstructorController = (dependancies: IDependencies) => {
    const { useCases: {getStudentsEnrolledByInstructorUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {


            const result = await getStudentsEnrolledByInstructorUseCase(dependancies).execute(req.params?.instructorId)

            if (!result) {
                return res.status(200).json({
                    success: false,
                    message: "No students enrolled under this instructor"
                })
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "No students enrolled under this instructor"
            })

        } catch (error: any) {
            next(error)
        }
    }
}