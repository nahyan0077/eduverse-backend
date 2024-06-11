import { CourseEntity } from "@/domain/entities";

export interface IUpdateCourseUseCase {
    execute(data: CourseEntity) : Promise <CourseEntity | null>
}