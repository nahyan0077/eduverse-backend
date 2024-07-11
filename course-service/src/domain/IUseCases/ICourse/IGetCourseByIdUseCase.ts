import { CourseEntity } from "@/domain/entities";

export interface IGetCourseByIdUseCase   {
    execute(id: string) : Promise <CourseEntity | null>
}