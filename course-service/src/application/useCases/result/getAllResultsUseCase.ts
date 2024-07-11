import { IDependencies } from "../../interfaces/IDependencies";

export const getAllResultsUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getAllResults }
    } = dependencies;

    return {
        execute: async () => {
            return await getAllResults();
        }
    }
};