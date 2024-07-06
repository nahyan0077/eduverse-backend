import { subscriptionPaymentEntity } from "../entities";

export interface ICreateSubscriptionPaymentUseCase {
    execute(data: subscriptionPaymentEntity): Promise<subscriptionPaymentEntity | null>;
}