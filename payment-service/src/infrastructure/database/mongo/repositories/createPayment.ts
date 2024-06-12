import { Payment } from "@/infrastructure/database/mongo/models";
import { PaymentEntity } from "@/domain/entities";

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
            throw new Error("Payment creation failed!");
        }

        return newPayment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}