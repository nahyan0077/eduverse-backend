import { 
    ICreateChatUseCase, 
    ICreateMessageUseCase, 
    IGetChatByIdUseCase, 
    IGetChatsByUserIdUseCase,
    IGetMessagesByChatIdUseCase,
    IUpdateChatUseCase
} from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    createChatUseCase: (dependencies: IDependencies) => ICreateChatUseCase;
    createMessageUseCase: (dependencies: IDependencies) => ICreateMessageUseCase;
    getChatByIdUseCase: (dependencies: IDependencies) => IGetChatByIdUseCase;
    getChatsByUserIdUseCase: (dependencies: IDependencies) => IGetChatsByUserIdUseCase;
    getMessagesByChatId: (dependencies: IDependencies) => IGetMessagesByChatIdUseCase;
    updateChatUseCase: (dependencies: IDependencies) => IUpdateChatUseCase;
    }