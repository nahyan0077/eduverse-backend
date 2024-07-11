import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateChatController = (dependencies: IDependencies) => {

    const {
        useCases: { updateChatUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = req.body;

            const result = await updateChatUseCase(dependencies)
                .execute(data);

            if (!result) {
                throw new Error("Chat updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Chat updated!"
            });

        } catch (error) {
            next(error);
        }
    }
}