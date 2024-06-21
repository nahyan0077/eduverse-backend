import { Types } from "mongoose";

interface LessonProgress {
    lessonNumber: number;
    totalTimeWatched: number;
}

enum CompleationStatus {
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
        completedLessons?:  number[] | [] | null;
        completedAssessments?: Types.ObjectId[] | [] | null;
        lessonProgress?: LessonProgress[] | null;
        overallCompletionPercentage?: number
    };
};