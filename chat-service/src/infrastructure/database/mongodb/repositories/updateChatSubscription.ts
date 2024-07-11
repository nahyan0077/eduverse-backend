import { ChatEntity } from "@/domain/entities";
import { Chat } from "../models";

export const updateChatSubscription = async (data: any) => {
	try {
		const { chatId,userId, subscriptionType  } = data;

        console.log(data,"to chat update data");
        

		const chat = await Chat.findByIdAndUpdate(
			 chatId,
			{
				$set: { subscriptionType },
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
