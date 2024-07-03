import { AssessmentEntity } from "@/domain/entities";

export interface ICreateAssessmentUseCase {
    execute(data: AssessmentEntity): Promise<AssessmentEntity | null>;
}