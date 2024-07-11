import { IDependencies } from "@/application/interfaces/IDependencies";
import { EnrollmentEntity } from "@/domain/entities";

export interface ICreateEnrollmentUseCase {
    execute(data: EnrollmentEntity): Promise <EnrollmentEntity | null>
}