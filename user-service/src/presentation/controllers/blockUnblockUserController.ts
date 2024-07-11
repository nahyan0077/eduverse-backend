import { IDependencies } from "../../application/interfaces/IDependencies";
import blockUnblockUserProducer from "../../infrastructure/kafka/producer/blockUnblockUserProducer";
import { Request, Response, NextFunction } from "express";



export const blockUnblockUserController = (dependencies: IDependencies) => {
    const { useCases: {blockUnblockUserUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id, isBlocked } = req.body

            console.log(req.body,"block and unblock");
            

            if (!id || typeof isBlocked !== "boolean") {
                return res.status(400).json({ success: false, message: "Invalid data" });
            }

            const updatedUser = await blockUnblockUserUseCase(dependencies).execute(id, isBlocked);

            //block unblock user producer
            await blockUnblockUserProducer({id,isBlocked})

            res.status(200).json({ success: true, data: updatedUser, message: "User blocked successfully" });

        } catch (error: any) {
            next(error)
        }
    }
}