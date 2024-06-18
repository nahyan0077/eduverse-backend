import { PaymentEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createPaymentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createPayment }
    } = dependencies;

    return {
        execute: async (data: PaymentEntity) => {
            return await createPayment(data);
        }
    }
};