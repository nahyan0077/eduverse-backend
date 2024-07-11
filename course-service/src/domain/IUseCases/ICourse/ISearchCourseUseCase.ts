import { CourseEntity } from "@/domain/entities";

export interface ISearchCourseUseCase {
    execute(query: string): Promise <CourseEntity [] | null>
}