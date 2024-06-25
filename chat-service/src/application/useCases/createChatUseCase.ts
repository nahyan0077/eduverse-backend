import { IDependencies } from "@/application/interfaces/IDependencies";
import { ChatEntity } from "@/domain/entities";

export const createChatUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { createChat }
    } = dependencies;

    return {
        execute: async (data: ChatEntity) => {
            return await createChat(data);
        }
    }
}