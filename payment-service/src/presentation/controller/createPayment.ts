import { IDependencies } from "@/application/interfaces/IDependencies";
import coursePurchaseSuccessProducer from "../../infrastructure/kafka/producer/coursePurchaseSuccessProducer";
import { Request, Response, NextFunction } from "express";


export const createPaymentController = (dependencies: IDependencies) => {
    const { useCases: {createPaymentUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const { instructorId, ...data } = req.body;

            const result = await createPaymentUseCase(dependencies).execute(req.body)

            if (!result) {
                throw new Error("payment failed!");
            }

            const producerData = {
                userId: result.userId.toString(),
                courseId: result.courseId.toString(),
                amount: result.amount,
                instructorId
            }

            //create payment producer
            await coursePurchaseSuccessProducer(producerData)

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