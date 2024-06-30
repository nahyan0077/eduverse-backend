import { IDependencies } from "@/application/interfaces/IDependencies";


export const updateMessageUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateMessage }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await updateMessage(id);
        }
    }
}