import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createChatController = (dependencies: IDependencies) => {

    const {
        useCases: { createChatUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = req.body;

            const result = await createChatUseCase(dependencies)
                .execute(data);

            if (!result) {
                throw new Error("Chat creation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Chat created!"
            });

        } catch (error) {
            next(error);
        }
    }
}