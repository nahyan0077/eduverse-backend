import { EnrollmentEntity } from "@/domain/entities";
import {Types} from 'mongoose'

export interface IUpdateLessonProgressUseCase {
	execute(
		enrollmentId: Types.ObjectId,
		lessonId: Types.ObjectId,
		totalLessons: number
	): Promise<EnrollmentEntity | null>;
}
