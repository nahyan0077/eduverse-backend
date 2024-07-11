import { IDependencies } from "@/application/interfaces/IDependencies";

export const getChatsByUserIdUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { getChatsByUserId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getChatsByUserId(id);
        }
    }
}