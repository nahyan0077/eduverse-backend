import { IDependencies } from "../../interfaces/IDependencies";

export const getResultByIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getResultById }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getResultById(id);
        }
    }
};