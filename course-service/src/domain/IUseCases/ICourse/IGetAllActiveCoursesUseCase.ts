import { CourseEntity } from "@/domain/entities";

export interface IGetAllActiveCoursesUseCases {
    execute(page: string | number, limit: string | number, search: string ) : Promise <{ courses: CourseEntity[], totalPages: number, currentPage: number}>
}