import { AssessmentEntity } from "@/domain/entities";

export interface IGetAssessmentsByInstructorIdUseCase {
    execute(id: string): Promise<AssessmentEntity[] | null>;
}
