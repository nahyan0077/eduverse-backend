import { Payment } from "../../../../infrastructure/database/mongo/models";
import { PaymentEntity } from "@/domain/entities";

export const updatePayment = async (
    data: PaymentEntity
): Promise<PaymentEntity | null> => {
    try {

        const { _id, ...rest } = data;

        const updated = await Payment.findByIdAndUpdate(_id, rest);

        if (!updated) {
            throw new Error("Payment updation failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}