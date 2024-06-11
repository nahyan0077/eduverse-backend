import { CourseEntity } from "@/domain/entities";

export interface IGetAllActiveCoursesUseCases {
    execute(page: string | number, limit: string | number ) : Promise <CourseEntity[] | null>
}