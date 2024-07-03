import { 
    ICreateChatUseCase, 
    ICreateMessageUseCase, 
    IUpdateMessageUseCase, 
    IGetChatByIdUseCase, 
    IGetChatsByUserIdUseCase,
    IGetMessagesByChatIdUseCase,
    IUpdateChatUseCase,
    IUpdateUnreadCountUseCase
} from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createChatUseCase: (dependencies: IDependencies) => ICreateChatUseCase;
    createMessageUseCase: (dependencies: IDependencies) => ICreateMessageUseCase;
    getChatByIdUseCase: (dependencies: IDependencies) => IGetChatByIdUseCase;
    getChatsByUserIdUseCase: (dependencies: IDependencies) => IGetChatsByUserIdUseCase;
    getMessagesByChatId: (dependencies: IDependencies) => IGetMessagesByChatIdUseCase;
    updateChatUseCase: (dependencies: IDependencies) => IUpdateChatUseCase;
    updateMessageUseCase: (depenedencies: IDependencies) => IUpdateMessageUseCase;
    updateUnreadCountUseCase: (depenedencies: IDependencies) => IUpdateUnreadCountUseCase;
}