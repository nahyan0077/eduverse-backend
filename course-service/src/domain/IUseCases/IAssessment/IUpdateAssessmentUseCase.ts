import { AssessmentEntity } from "@/domain/entities";

export interface IUpdateAssessmentUseCase {
    execute(data: AssessmentEntity): Promise<AssessmentEntity | null>;
}