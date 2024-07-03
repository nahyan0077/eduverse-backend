import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateAssessmentController = (dependencies: IDependencies) => {

    const {
        useCases: { updateAssessmentUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const data = req.body;

            console.log(data,"ata controlere updett");
            

            const result = await updateAssessmentUseCase(dependencies)
                .execute(data);

            if(!result){
                return res.status(200).json({
                    success: false,
                    message: "Assessment updation failed!"
                });
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "Assessment updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}