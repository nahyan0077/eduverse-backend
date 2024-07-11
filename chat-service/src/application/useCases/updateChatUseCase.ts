import { IDependencies } from "@/application/interfaces/IDependencies";
import { ChatEntity } from "@/domain/entities";

export const updateChatUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateChat }
    } = dependencies;

    return {
        execute: async (data: ChatEntity) => {
            return await updateChat(data);
        }
    }
}