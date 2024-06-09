import { CategoryEntity, CourseEntity } from "@/domain/entities";

export interface IGetAllCourseUseCase {
    execute() : Promise <CourseEntity[] | null>
}