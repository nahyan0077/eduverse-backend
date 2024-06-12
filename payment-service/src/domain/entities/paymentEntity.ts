import { Types } from "mongoose";

export interface PaymentEntity {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    method: string;
    status: string;
    amount: number;
}