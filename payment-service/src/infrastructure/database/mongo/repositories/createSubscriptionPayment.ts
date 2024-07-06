import { SubscriptionPayment } from "../../../../infrastructure/database/mongo/models";
import {  subscriptionPaymentEntity } from "@/domain/entities";
import ErrorResponse from "../../../../_lib/common/error/errorResponse";

export const createSubscriptionPayment = async (
    data: subscriptionPaymentEntity
): Promise<subscriptionPaymentEntity | null> => {
    try {

        const existing = await SubscriptionPayment.findOne({ 
            userId: data.userId, 
            chatId: data.chatId,
            status: data.status,
            subscriptionType: data.subscriptionType  
        });

        if(existing){
            return existing;
        }

        const newPayment = await SubscriptionPayment.create(data);

        if (!newPayment) {
            throw ErrorResponse.internalError("Payment creation failed!");
        }

        return newPayment;

    } catch (error: any) {
        throw ErrorResponse.internalError(error.message || "An unexpected error occurred");
    }
}