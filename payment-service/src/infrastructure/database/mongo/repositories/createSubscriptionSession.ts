import { SubscriptionSession } from "../../../../infrastructure/database/mongo/models";
import { SessionEntity, SubscriptionSessionEntity } from "@/domain/entities";

export const createSubscriptionSession = async (
    data: SubscriptionSessionEntity
): Promise<SubscriptionSessionEntity | null> => {
    try {

        const newSession = await SubscriptionSession.create(data);

        if (!newSession) {
            throw new Error("Session creation failed!");
        }

        return newSession;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}