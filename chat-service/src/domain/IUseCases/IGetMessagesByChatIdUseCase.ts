import { MessageEntity } from "../entities";

export interface IGetMessagesByChatIdUseCase {
    execute(id: string): Promise<MessageEntity[] | null>;
}