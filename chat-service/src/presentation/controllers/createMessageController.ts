import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createMessageController = (dependencies: IDependencies) => {

    const {
        useCases: { createMessageUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = req.body;

            const result = await createMessageUseCase(dependencies)
                .execute(data);

            if (!result) {
                throw new Error("Message creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Message created!"
            });

        } catch (error) {
            next(error);
        }
    }
}