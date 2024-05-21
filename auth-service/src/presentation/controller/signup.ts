import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const signupController = (dependancies: IDependancies) => {
    const { useCases: {createUserUseCase} } = dependancies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log(req.body,"sign up data");
            
            const created = await createUserUseCase(dependancies).execute(req.body)
            if (!created) {
                res.status(500).json({ success: false, message: "User creation failed!" });
            } else {
                res.status(201).json({ success: true, data: created, message: "User created successfully!" });
            }
        } catch (error: any) {
            next(error)
        }
    }
}