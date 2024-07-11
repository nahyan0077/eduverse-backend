import { AssessmentEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const updateAssessmentUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { updateAssessment }
    } = dependencies;

    return {
        execute: async (data: AssessmentEntity) => {
            return await updateAssessment(data);
        }
    }
};