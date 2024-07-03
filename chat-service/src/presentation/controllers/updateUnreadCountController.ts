import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateUnreadCountController = (dependencies: IDependencies) => {

    const { useCases: {updateUnreadCountUseCase} } = dependencies

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const data = req.body;

            console.log(data,"unread data");
            

            const result = await updateUnreadCountUseCase(dependencies)
                .execute(data);

            if (!result) {
                return res.status(200).json({
                    success: false,
                    message: "Unread count updation failed!"
                });
            }

            return res.status(200).json({
                success: true,
                data: result,
                message: "Unread count updated!"
            });

        } catch (error) {
            next(error);
        }
    }

}
