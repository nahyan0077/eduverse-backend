import { AssessmentEntity } from "@/domain/entities";

export interface IGetAssessmentsByCourseIdUseCase {
    execute(id: string): Promise<AssessmentEntity[] | null>;
}
