import { AssessmentEntity } from "@/domain/entities";

export interface IGetAllAssessmentsUseCase {
    execute(): Promise<AssessmentEntity[] | null>;
}
