import { Types } from "mongoose";

export interface SubscriptionSessionEntity {
    _id?: Types.ObjectId;
    sessionId: string;
    userId: Types.ObjectId;
    chatId: Types.ObjectId;
}