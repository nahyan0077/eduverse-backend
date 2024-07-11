import { Types } from "mongoose";

export interface ResultEntity {
    _id?: Types.ObjectId;
    userRef: Types.ObjectId;
    assessmentRef: Types.ObjectId;
    score: number;
    isPassed: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};