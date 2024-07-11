import { MessageEntity } from "../entities";

export interface IUpdateMessageUseCase {
    execute(data: any): Promise<MessageEntity | null>;
}