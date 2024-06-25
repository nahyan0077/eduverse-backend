import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getChatByIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getChatByIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const id = req.params?.chatId;

            const result = await getChatByIdUseCase(dependencies)
                .execute(id);

            if (!result) {
                throw new Error("Chat retrievel failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Chat retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}