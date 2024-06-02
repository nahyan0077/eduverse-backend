import forgotPasswordProducer from "../../infrastructure/kafka/producers/forgotPasswordProducer";
import { generateForgotPasswordToken } from "../../_lib/http/jwt";
import { IDependancies } from "../../application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const forgotPasswordMailController = (dependancies: IDependancies) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.body,"forgot password");

            const { email } = req.body

            const token =  generateForgotPasswordToken({email})           
            
            // produce this token and email to notification
            await forgotPasswordProducer({email,token})

            res.status(200).json({
                success: true,
                data: {},
                message: "Mail produced!"
            });

        } catch (error: any) {
            next(error);
        }
    }
}