import { Session } from "../../../../infrastructure/database/mongo/models";
import { SessionEntity } from "@/domain/entities";

export const getPaymentSessionById = async (
    id: string
): Promise<SessionEntity | null> => {
    try {

        const session = await Session.findById(id);

        if (!session) {
            throw new Error("Session not found!");
        }

        return session;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}