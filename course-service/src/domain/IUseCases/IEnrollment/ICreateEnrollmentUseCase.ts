
import { EnrollmentEntity } from "../../entities/EnrollmentEntity";

export interface ICreateEnrollmentUseCase {
    execute(data: EnrollmentEntity): Promise <EnrollmentEntity | null>
}