import { Types } from "mongoose";

export interface SessionEntity {
    _id?: Types.ObjectId;
    sessionId: string;
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
}