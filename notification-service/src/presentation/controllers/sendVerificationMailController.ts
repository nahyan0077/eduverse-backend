import { IDependencies } from "@/application/interfaces/IDependencies";
import { sendVerifcationMail } from "../../infrastructure/services/mail/sendVerificationMail";
import { Request, Response, NextFunction } from "express";

export const sendVerifcationMailController = (dependencies: IDependencies) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        try {      
    
            await sendVerifcationMail(req.body.email)
    
            res.status(200).json({
                success: true,
                data: {},
                message: "Email send!"
            });
        } catch (error: any) {
            next(error)
        }
    }
}