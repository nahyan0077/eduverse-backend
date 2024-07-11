import { EnrollmentEntity } from "../../entities/EnrollmentEntity";

export interface IGetEnrollmentByUserIdUseCase {
    execute(userId: string): Promise<EnrollmentEntity[] | null>;
}