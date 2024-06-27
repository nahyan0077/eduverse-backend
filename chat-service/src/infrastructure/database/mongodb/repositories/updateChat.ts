import { ChatEntity } from "@/domain/entities";
import { Chat } from "../models";

export const updateChat = async (data: ChatEntity) => {
	try {
		const { _id, ...updates } = data;

        console.log(data,"to chat update data");
        

		const chat = await Chat.findByIdAndUpdate(
			_id,
			{
				$set: { ...updates },
			},
			{
				new: true,
			}
		);

        console.log(chat,"updated chat");
        

		return chat;
	} catch (error: any) {
		throw new Error(error?.message || "Something went wrong!");
	}
};
