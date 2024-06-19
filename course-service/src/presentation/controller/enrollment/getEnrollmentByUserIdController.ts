import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";


export const getEnrollmentByUserIdController = (dependencies: IDependencies) => {
    const { useCases:{ getEnrollmentByUserIdUseCase } } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id} = req.params

            const result = await getEnrollmentByUserIdUseCase(dependencies).execute(id)

            if (!result) {
                return res.status(200).json({
					success: true,
					data: {},
					message: "Enroll to this course!",
				});
            }else{
                return res.status(200).json({
					success: false,
					data: {},
					message: "You have already enrolled to this course!",
				});
                
            }

        } catch (error: any) {
            next(error)
        }
    }
}