import { AssessmentEntity } from "@/domain/entities";

export interface IGetAssessmentByIdUseCase {
    execute(id: string): Promise<AssessmentEntity | null>;
}
