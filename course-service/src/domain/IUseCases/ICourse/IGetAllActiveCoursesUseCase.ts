import { CourseEntity } from "@/domain/entities";

export interface IGetAllActiveCoursesUseCases {
    execute(data: {page: string | number, limit: string | number }) : Promise <CourseEntity[] | null>
}