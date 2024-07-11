import { IDependencies } from "@/application/interfaces/IDependencies";
import { ChatEntity } from "@/domain/entities";

export const updateUnreadCountUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { updateUnreadCount }
    } = dependencies;

    return {
        execute: async (data: ChatEntity) => {
            return await updateUnreadCount(data);
        }
    }
}