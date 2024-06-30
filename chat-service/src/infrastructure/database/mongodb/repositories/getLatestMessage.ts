import { Message } from "../models";

export const getLatestMessage = async (chatId: string) => {
    try {
        const latestMessage = await Message.findOne({ chatId })
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order
            .exec();

        if (!latestMessage) {
            throw new Error("No messages found in this chat");
        }
        

        return latestMessage;
    } catch (error: any) {
        throw new Error(error?.message || "An error occurred while fetching the latest message");
    }
};
