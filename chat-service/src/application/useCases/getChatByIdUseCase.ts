import { IDependencies } from "@/application/interfaces/IDependencies";

export const getChatByIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getChatById }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getChatById(id);
        }
    }
}