import { IDependencies } from "../../interfaces/IDependencies";

export const getResultByUserIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getResultByUserId }
    } = dependencies;

    return {
        execute: async (userId: string) => {
            return await getResultByUserId(userId);
        }
    }
};