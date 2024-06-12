import ErrorResponse from "../../_lib/common/error/errorResponse";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateUserController = (dependencies: IDependencies) => {

    const {
        useCases: { updateUserUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            


            if(!req.body?._id){
                res.status(200).json({
                    success: false,
                    data: {},
                    message: "User not found"
                });
            }

            const result = await updateUserUseCase(dependencies)
                .execute(req.body);

            if(!result){
                throw ErrorResponse.internalError("User profile updation failed");
            }

            //produce message -> auth, chat, course
            // userUpdatedProducer(result);
            //=====================================

            res.status(200).json({
                success: true,
                data: result,
                message: "User updated"
            });


        } catch (error) {
            next(error);
        }
    }
}