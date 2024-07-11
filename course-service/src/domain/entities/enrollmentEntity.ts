import { Types } from "mongoose";


export enum CompleationStatus {
    enrolled = 'enrolled',
    inProgress = 'in-progress',
    Completed = 'completed',
}

export interface EnrollmentEntity {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    enrolledAt?: Date | string;
    completionStatus?: CompleationStatus;
    progress?: {
        completedLessons?:  Types.ObjectId[] | [] | null;
        completedAssessments?: Types.ObjectId[] | [] | null;
        overallCompletionPercentage?: number
    };
};