import { Payment } from "../models"

export const getAllPayments = async () => {
    try {
        
        const result = await Payment.find({})

        if (!result) {
            throw new Error("Now payment found");
            
        }

        return result

    } catch (error: any) {
        throw new Error(error?.message);
        
    }
}