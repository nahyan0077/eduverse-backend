import { ChatEntity } from "../entities";

export interface IGetChatByIdUseCase {
    execute(id: string): Promise<ChatEntity | null>;
}