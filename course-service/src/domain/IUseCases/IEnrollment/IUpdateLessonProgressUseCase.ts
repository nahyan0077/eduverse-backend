import { EnrollmentEntity } from "../../entities/EnrollmentEntity";
import {Types} from 'mongoose'

export interface IUpdateLessonProgressUseCase {
	execute(
		enrollmentId: Types.ObjectId,
		lessonId: Types.ObjectId,
		totalLessons: number
	): Promise<EnrollmentEntity | null>;
}
