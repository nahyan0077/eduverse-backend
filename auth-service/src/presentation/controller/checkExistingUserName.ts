import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const chechExistingUserNameController = (dependancies: IDependancies) => {
    const { useCases: {checkExistingUserNameUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { username } = req.params   
            console.log(username,"usrn name racherd ");
            
            const result = await checkExistingUserNameUseCase(dependancies).execute(username)

            
            if (!result) {
                return res.status(409).json({
                    success: false,
                    message: "username is already taken",
                });
            }
            return res.status(200).json({
				success: true,
				message: "username is available",
			});
        } catch (error: any) {
            next(error)
    
            
        }
    }
}