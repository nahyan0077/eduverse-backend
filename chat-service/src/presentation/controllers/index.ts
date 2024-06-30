import { IDependencies } from "@/application/interfaces/IDependencies";
import { createChatController } from "./createChatController";
import { createMessageController } from "./createMessageController";
import { getChatByIdController } from "./getChatByIdController";
import { getChatsByUserIdController } from "./getChatsByUserIdController";
import { getMessagesByChatIdController } from "./getMessagesByChatIdController";
import { updateChatController } from "./updateChatController";
import { updateMessageController } from "./updateMessageController";

export const controllers = (dependencies: IDependencies) => {
    return {
        createChat: createChatController(dependencies),
        createMessage: createMessageController(dependencies),
        getChatById: getChatByIdController(dependencies),
        getChatsByUserId: getChatsByUserIdController(dependencies),
        getMessagesByChatId: getMessagesByChatIdController(dependencies),
        updateChat: updateChatController(dependencies),
        updateMessage: updateMessageController(dependencies)
    }
};