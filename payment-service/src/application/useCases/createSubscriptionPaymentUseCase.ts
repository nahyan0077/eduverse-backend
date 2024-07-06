import { subscriptionPaymentEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createSubscriptionPaymentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createSubscriptionPayment }
    } = dependencies;

    return {
        execute: async (data: subscriptionPaymentEntity) => {
            return await createSubscriptionPayment(data);
        }
    }
};