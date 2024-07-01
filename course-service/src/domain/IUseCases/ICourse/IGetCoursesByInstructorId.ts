import { CourseEntity } from "@/domain/entities";

export interface IGetCoursesByInstructorId {
	execute(instructorId: string): Promise<CourseEntity[] | []>;
}
