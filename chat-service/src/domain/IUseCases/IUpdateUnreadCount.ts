import { ChatEntity } from "../entities";

export interface IUpdateUnreadCountUseCase {
    execute(data: ChatEntity): Promise<ChatEntity | null>;
}