import { ChatEntity } from "../entities";

export interface IUpdateChatUseCase {
    execute(data: ChatEntity): Promise<ChatEntity | null>;
}