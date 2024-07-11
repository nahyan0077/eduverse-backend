import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const findUserByEmailController = (dependancies: IDependancies) => {
    const {
        useCases: { findUserByEmailUseCase },
    } = dependancies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email } = req.params;
            const result = await findUserByEmailUseCase(dependancies).execute(email);

            if (result) {
                return res
                    .status(409)
                    .json({ success: false, message: "Email is already taken" });
            } else {
                return res
                    .status(200)
                    .json({ success: true, message: "Email is unique!" });
            }
        } catch (error: any) {
            next(error);
        }
    };
};