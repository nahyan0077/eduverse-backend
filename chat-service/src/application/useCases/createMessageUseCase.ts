import { IDependencies } from "@/application/interfaces/IDependencies";
import { MessageEntity } from "@/domain/entities";

export const createMessageUseCase = (dependencies: IDependencies) => {
    const {
        repositories: { createMessage }
    } = dependencies;

    return {
        execute: async (data: MessageEntity) => {
            return await createMessage(data);
        }
    }
}