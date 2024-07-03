import { IDependencies } from "../../interfaces/IDependencies";

export const getAllAssessmentsUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAllAssessments }
    } = dependencies;

    return {
        execute: async () => {
            return await getAllAssessments();
        }
    }
};