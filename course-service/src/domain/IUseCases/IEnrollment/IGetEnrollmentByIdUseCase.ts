import { EnrollmentEntity } from "../../entities/EnrollmentEntity";


export interface IGetEnrollmentByIdUseCase {
    execute(id: string): Promise<EnrollmentEntity | null>;
}