import { PaymentEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const updatePaymentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updatePayment }
    } = dependencies;

    return {
        execute: async (data: PaymentEntity) => {
            return await updatePayment(data);
        }
    }
};