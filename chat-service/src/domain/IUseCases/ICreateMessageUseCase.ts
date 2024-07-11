import { MessageEntity } from "../entities";

export interface ICreateMessageUseCase {
    execute(data: MessageEntity): Promise<MessageEntity | null>;
}