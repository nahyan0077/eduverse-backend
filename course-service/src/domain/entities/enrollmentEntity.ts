import { Types } from "mongoose";

interface LessonProgress {
    lessonId: Types.ObjectId | string;
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
        completedLessons?: Types.ObjectId[] | [] | null;
        completedAssessments?: Types.ObjectId[] | [] | null;
        currentLesson?: Types.ObjectId | string;
        lessonProgress?: LessonProgress[] | null;
    };
};