import { IDependencies } from "../../interfaces/IDependencies";

export const getAssessmentsByCourseIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getAssessmentsByCourseId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getAssessmentsByCourseId(id);
        }
    }
};