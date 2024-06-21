import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getEnrollmentByIdController = (dependancies: IDependencies) => {
    const { useCases: {getEnrollmentByIdUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const {id} = req.params

            const result = await getEnrollmentByIdUseCase(dependancies)
                .execute(id);

            res.status(200).json({
                success: true,
                data: result,
                message: "Enrollment retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}