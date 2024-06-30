import { ChatEntity, MessageEntity } from "@/domain/entities";

export interface IRepositories {
    createChat: (data: ChatEntity) => Promise<ChatEntity | null>;
    createMessage: (data: MessageEntity) => Promise<MessageEntity | null>;
    getChatById: (id: string) => Promise<ChatEntity | null>;
    getChatsByUserId: (id: string) => Promise<ChatEntity[] | null>;
    getMessagesByChatId: (id: string) => Promise<MessageEntity[] | null>;
    updateChat: (data: ChatEntity) => Promise<ChatEntity | null>;
    updateMessage: (data: any) => Promise <MessageEntity | null> 
}