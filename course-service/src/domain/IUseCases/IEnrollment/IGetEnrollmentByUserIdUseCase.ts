import { EnrollmentEntity } from "../../../domain/entities";

export interface IGetEnrollmentByUserIdUseCase {
    execute(userId: string): Promise<EnrollmentEntity[] | null>;
}