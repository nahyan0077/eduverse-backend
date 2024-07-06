import { Types } from "mongoose";

export interface subscriptionPaymentEntity {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    chatId: Types.ObjectId;
    method: string;
    status: string;
    amount: number;
    subscriptionType?: "basic"| "standard" | "premium" | null;
}