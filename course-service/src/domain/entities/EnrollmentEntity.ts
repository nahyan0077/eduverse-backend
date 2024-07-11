import { Types } from "mongoose";


export enum CompletionStatus {
    enrolled = 'enrolled',
    inProgress = 'in-progress',
    Completed = 'completed',
}

export interface EnrollmentEntity {
    _id?: Types.ObjectId;
    userId: Types.ObjectId;
    courseId: Types.ObjectId;
    enrolledAt?: Date | string;
    completionStatus?: CompletionStatus;
    progress?: {
        completedLessons?:  Types.ObjectId[] | [] | null;
        completedAssessments?: Types.ObjectId[] | [] | null;
        overallCompletionPercentage?: number
    };
};
