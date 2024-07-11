import { IDependencies } from "../interfaces/IDependencies";

export const getPaymentSessionByIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getPaymentSessionById }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getPaymentSessionById(id);
        }
    }
};