import { CourseEntity } from "@/domain/entities";

export interface IGetInstructorsByStudentrUseCase {
    execute(studentId: string) : Promise<CourseEntity []>
}