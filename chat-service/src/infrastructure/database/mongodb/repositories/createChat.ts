import { ChatEntity } from "@/domain/entities";
import { Chat } from "../models";
import ErrorResponse from "../../../../_lib/common/error/errorResponse";

export const createChat = async (data: ChatEntity) => {
	try {
		const chat = await Chat.create(data);

        if (!chat) {
            throw ErrorResponse.internalError("Chat creation error")
        }

		return chat;
	} catch (error: any) {
		throw ErrorResponse.internalError(error?.message || "Something went wrong!");
	}
};
