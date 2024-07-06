import { SubscriptionSessionEntity } from "../entities";

export interface ICreateSubscriptionSessionUseCase  {
    execute: (data: SubscriptionSessionEntity ) => Promise <SubscriptionSessionEntity | null>
}