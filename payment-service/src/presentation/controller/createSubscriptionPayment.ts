import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import chatSubscriptionSuccessProducer from "../../infrastructure/kafka/producer/chatSubscriptionSuccessProducer";


export const createSubscripionPaymentController = (dependencies: IDependencies) => {
    const { useCases: {createSubscriptionPaymentUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { instructorId,subscriptionType, ...data } = req.body;

            console.log(req.body,"subscriptioin purchase");
            

            const result = await createSubscriptionPaymentUseCase(dependencies).execute(req.body)

            if (!result) {
                throw new Error("payment failed!");
            }

            const producerData = {
                userId: result.userId.toString(),
                chatId: result.chatId.toString(),
                amount: result.amount,
                instructorId,
                subscriptionType
            }

            console.log(producerData,"produser subcrip");

            

            // //create subscription producer
            await chatSubscriptionSuccessProducer(producerData)

            res.status(200).json({
                success: true,
                data: result,
                message: "payment success!"
            });

        } catch (error: any) {
            next(error)
        }
    }
}