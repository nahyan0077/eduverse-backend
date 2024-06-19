import ErrorResponse from "@/_lib/common/error/errorResponse";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createEnrollment = async (dependencies: IDependencies) => {
    const { useCases: {createEnrollmentUseCase, getEnrollmentByUserIdUseCase} } = dependencies

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
    
            const enrollments = await getEnrollmentByUserIdUseCase(dependencies).execute(req.body?.userId)

            const existingEnrollment = enrollments?.find((item) => item.courseId._id.toString()  === req.body?.courseId?.toString())

            if (existingEnrollment) {
                throw ErrorResponse.conflict("You have already enrolled to this course!")
            }

            const result = await createEnrollmentUseCase(dependencies).execute(req.body)

            if (!result) {
                throw ErrorResponse.internalError ("Enrollment creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Enrollment created successfuly!"
            });

        } catch (error: any) {
            next(error)
        }
    }


}