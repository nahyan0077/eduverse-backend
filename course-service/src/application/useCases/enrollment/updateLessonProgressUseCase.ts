import { IDependencies } from "@/application/interfaces/IDependencies";
import { Types } from "mongoose";

export const updateLessonProgressUseCase = (dependancies: IDependencies) => {
	const {
		repositories: { updateLessonProgress },
	} = dependancies;
	return {
		execute: async (
			enrollmentId: Types.ObjectId,
			lessonId: Types.ObjectId,
			totalLessons: number
		) => {
			return await updateLessonProgress(enrollmentId, lessonId, totalLessons);
		},
	};
};
