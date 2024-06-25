import { IDependencies } from "@/application/interfaces/IDependencies";

export const getMessagesByChatId = (dependencies: IDependencies) => {
    const {
        repositories: { getMessagesByChatId }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getMessagesByChatId(id);
        }
    }
}