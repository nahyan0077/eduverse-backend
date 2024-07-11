import { ChatEntity } from "../entities";

export interface IGetChatsByUserIdUseCase {
    execute(id: string): Promise<ChatEntity[] | null>;
}