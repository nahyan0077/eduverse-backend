import { SessionEntity, SubscriptionSessionEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createSubscriptionSessionUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createSubscriptionSession }
    } = dependencies;

    return {
        execute: async (data: SubscriptionSessionEntity) => {
            return await createSubscriptionSession(data);
        }
    }
};