import { Chat } from "../models"
import ErrorResponse from "../../../../_lib/common/error/errorResponse";

export const getChatById = async (
    id: string
) => {
    try {
        const chat = await Chat.findById(id);

        if (!chat) {
            throw ErrorResponse.internalError("Get chat by id failed")
        }

        return chat;
    } catch (error: any) {
        throw ErrorResponse.internalError(error?.message || "Something went wrong!");
    }
};