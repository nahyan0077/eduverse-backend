import { MessageEntity } from "../entities";

export interface IUpdateMessageUseCase {
    execute(id: string): Promise<MessageEntity | null>;
}