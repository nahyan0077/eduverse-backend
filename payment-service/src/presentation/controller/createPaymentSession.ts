import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import Stripe from "stripe";

export const createPaymentSessionController = (dependencies: IDependencies) => {
    const { useCases: {createSessionUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            if (!process.env.STRIPE_SECRET_KEY) {
                console.log("Stripe secret key is not found in env");
                return res.status(500).send("Internal server error: Stripe secret key is missing");
            }

            const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {apiVersion: '2024-04-10'})

            const { courseName, courseThumbnail, userId, courseId, amount } = req.body;

            const data = [
                {
                    price_data: {
                        currency: "INR",
                        product_data: {
                            name: courseName,
                            images: [courseThumbnail],
                        },
                        unit_amount: Math.floor(amount * 100)
                    },
                    quantity: 1
                }
            ];

            const session = await stripeInstance.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: data,
                mode: "payment",
                success_url: `${process.env.FRONTEND_URL}/payment-success`,
                cancel_url: `${process.env.FRONTEND_URL}/payment-failed`
            });

            const result = await createSessionUseCase(dependencies).execute({
                userId,
                courseId,
                sessionId: session.id
            });

            res.status(200).json({
                success: true,
                data: result,
                message: "session created!"
            });
        } catch (error: any) {
            next(error)
        }
    }
}