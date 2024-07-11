import { Session } from "../../../../infrastructure/database/mongo/models";
import { SessionEntity } from "@/domain/entities";

export const createSession = async (
    data: SessionEntity
): Promise<SessionEntity | null> => {
    try {

        const newSession = await Session.create(data);

        if (!newSession) {
            throw new Error("Session creation failed!");
        }

        return newSession;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}