import { IDependencies } from "../../interfaces/IDependencies";

export const getAssessmentByIdUseCase = (dependencies: IDependencies) => {
    
    const {
        repositories: { getAssessmentById }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getAssessmentById(id);
        }
    }
};