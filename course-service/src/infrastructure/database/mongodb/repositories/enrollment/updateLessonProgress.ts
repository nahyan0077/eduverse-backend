import { EnrollmentEntity, CompleationStatus } from "../../../../../domain/entities";
import { Enrollment } from "../../models";
import { Types } from "mongoose";



export const updateLessonProgress = async (enrollmentId: Types.ObjectId, lessonId: Types.ObjectId, totalLessons: number):Promise <EnrollmentEntity | null> => {
    try {

        const enrollment = await Enrollment.findById(enrollmentId);

        if (!enrollment) {
            throw new Error("This Enrollment does not exist");
        }

        if (!enrollment.progress) {
            enrollment.progress = { completedLessons: [], completedAssessments: [], overallCompletionPercentage: 0 };
        }

        if (!enrollment.progress.completedLessons) {
            enrollment.progress.completedLessons = [];
        }

        const index = enrollment.progress?.completedLessons?.findIndex((item) => item == lessonId )

        if (index == -1) {
           (enrollment?.progress?.completedLessons as Types.ObjectId[])?.push(lessonId)
        }

        const completedLessons = enrollment.progress.completedLessons.length;
        const percentageComplete = (completedLessons / totalLessons) * 100;
        enrollment.progress.overallCompletionPercentage = percentageComplete;

        if (percentageComplete === 100) {
            enrollment.completionStatus  = CompleationStatus.Completed;
        } else if (completedLessons > 0) {
            enrollment.completionStatus  = CompleationStatus.inProgress;
        }

        const updated = await enrollment.save();

        return updated

    } catch (error: any) {
        throw new Error(error.message);
    }
};
