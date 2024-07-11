import { CourseEntity } from "@/domain/entities";

export interface IUpdateCourseUseCase {
    execute(data: CourseEntity, incrementStudentsEnrolled: boolean) : Promise <CourseEntity | null>
}