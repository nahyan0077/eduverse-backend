import { ChatEntity } from "@/domain/entities";
import { Chat } from "../models";

export const createChat = async (
    data: ChatEntity
) => {
    try {
        const chat = await Chat.create(data);
        return chat;
    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong!");
    }
}