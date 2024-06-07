import { CourseEntity } from "@/domain/entities";

export interface ICreateCourseUseCase {
	execute(data: CourseEntity): Promise<CourseEntity | null>;
}
