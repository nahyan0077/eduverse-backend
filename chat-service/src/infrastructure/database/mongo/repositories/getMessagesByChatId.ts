import { Types } from "mongoose";
import { Message } from "../models";

export const getMessagesByChatId = async (
    chatId: string | Types.ObjectId
) => {
    try {
        const messages = Message.find({
            chat: chatId
        });
        return messages;
    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong!");
    }
}