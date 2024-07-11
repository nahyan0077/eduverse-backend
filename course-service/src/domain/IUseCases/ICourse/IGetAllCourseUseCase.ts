import { CategoryEntity, CourseEntity } from "../../../domain/entities";

export interface IGetAllCourseUseCase {
    execute(page: number, limit: number, search: string): Promise<{ courses: CourseEntity[]; totalPages: number; currentPage: number;}>;
};