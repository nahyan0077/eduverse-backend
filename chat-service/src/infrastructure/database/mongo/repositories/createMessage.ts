import { MessageEntity } from "@/domain/entities";
import { Message } from "../models";

export const createMessage = async (
    data: MessageEntity
) => {
    try {
        const message = await Message.create(data);
        return message;
    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong!");
    }
}