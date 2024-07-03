import { AssessmentEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createAssessmentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createAssessment }
    } = dependencies;

    return {
        execute: async (data: AssessmentEntity) => {
            return await createAssessment(data);
        }
    }
};