import { Types } from "mongoose";
import { Message } from "../models";
import ErrorResponse from "../../../../_lib/common/error/errorResponse";

export const getMessagesByChatId = async (chatId: string | Types.ObjectId) => {
	try {
		const messages = Message.find({
			chat: chatId,
		});

        if(!messages) {
            throw ErrorResponse.internalError("Get message by chatid error")
        }

		return messages;
	} catch (error: any) {
		throw ErrorResponse.internalError(error?.message || "Something went wrong!");
	}
};
