import { Types } from "mongoose";
import { Chat } from "../models";
import ErrorResponse from "../../../../_lib/common/error/errorResponse";

export const getChatsByUserId = async (userId: string | Types.ObjectId) => {
	try {
		const chats = Chat.find({ participants: userId }).populate('participants')

		if (!chats) {
			throw ErrorResponse.internalError(" get Chat by userId error");
		}

		return chats;
	} catch (error: any) {
		throw ErrorResponse.internalError(
			error?.message || "Something went wrong!"
		);
	}
};
