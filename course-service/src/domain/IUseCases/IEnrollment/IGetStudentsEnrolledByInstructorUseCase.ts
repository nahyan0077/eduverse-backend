import { EnrollmentEntity } from "../../../domain/entities";

export interface IGetStudentsEnrolledByInstructorUseCase {
    execute(instructorId: string) : Promise<EnrollmentEntity []>
}