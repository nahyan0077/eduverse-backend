import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getChatsByUserIdController = (dependencies: IDependencies) => {

    const {
        useCases: { getChatsByUserIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const id = req.params?.userId;
            

            const result = await getChatsByUserIdUseCase(dependencies)
                .execute(id);

            if (!result) {
                throw new Error("Chats retrievel failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Chats retrieved!"
            });

        } catch (error) {
            next(error);
        }
    }
}