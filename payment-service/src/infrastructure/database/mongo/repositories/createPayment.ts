import { Payment } from "@/infrastructure/database/mongo/models";
import { PaymentEntity } from "@/domain/entities";
import errorHandler from "@/_lib/common/error/errorhandler";
import ErrorResponse from "@/_lib/common/error/errorResponse";

export const createPayment = async (
    data: PaymentEntity
): Promise<PaymentEntity | null> => {
    try {

        const existing = await Payment.findOne({ 
            userId: data.userId, 
            courseId: data.courseId,
            status: data.status  
        });

        if(existing){
            return existing;
        }

        const newPayment = await Payment.create(data);

        if (!newPayment) {
            throw ErrorResponse.internalError("Payment creation failed!");
        }

        return newPayment;

    } catch (error: any) {
        throw ErrorResponse.internalError(error.message || "An unexpected error occurred");
    }
}