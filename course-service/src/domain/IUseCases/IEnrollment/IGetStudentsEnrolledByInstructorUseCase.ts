import { EnrollmentEntity } from "../../entities/EnrollmentEntity";

export interface IGetStudentsEnrolledByInstructorUseCase {
    execute(instructorId: string) : Promise<EnrollmentEntity []>
}