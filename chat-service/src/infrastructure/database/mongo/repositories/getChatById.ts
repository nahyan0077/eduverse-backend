import { Chat } from "../models"

export const getChatById = async (
    id: string
) => {
    try {
        const chat = await Chat.findById(id);
        return chat;
    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong!");
    }
};