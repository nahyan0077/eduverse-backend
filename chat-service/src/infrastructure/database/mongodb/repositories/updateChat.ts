import { ChatEntity } from "@/domain/entities";
import { Chat } from "../models";

export const updateChat = async (
    data: ChatEntity
) => {
    try {
        const { _id, ...updates } = data;
        const chat = await Chat.findByIdAndUpdate(_id, {
            type: updates.type,
            status: updates.status,
            groupName: updates.groupName,
            groupDescription: updates.groupDescription
        }, {
            new: true
        });
        return chat;
    } catch (error: any) {
        throw new Error(error?.message || "Something went wrong!");
    }
}