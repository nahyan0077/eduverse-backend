import { IDependencies } from "../../interfaces/IDependencies";

export const getAssessmentsByInstructorIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getAssessmentsByInstructorId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getAssessmentsByInstructorId(id);
        }
    }
};