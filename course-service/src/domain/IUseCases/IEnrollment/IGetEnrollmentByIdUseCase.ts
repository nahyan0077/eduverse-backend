import { EnrollmentEntity } from "../../../domain/entities";


export interface IGetEnrollmentByIdUseCase {
    execute(id: string): Promise<EnrollmentEntity | null>;
}