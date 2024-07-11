import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getMessagesByChatIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getMessagesByChatId }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const id = req.params?.chatId;

            const result = await getMessagesByChatId(dependencies)
                .execute(id);

            if (!result) {
                throw new Error("Messages retrievel failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Messages retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}