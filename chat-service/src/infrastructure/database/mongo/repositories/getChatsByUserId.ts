import { Types } from "mongoose";
import { Chat } from "../models";

export const getChatsByUserId = async (
    userId: string | Types.ObjectId
) => {
    try {
        const chats = Chat.find({ participants: userId }).populate("participants");
        return chats;
    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong!");
    }
}