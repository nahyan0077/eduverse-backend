import { PaymentEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: {
	chatId: string;
	userId: string;
	amount: number;
	instructorId: string;
	subscriptionType: string;
}) => {
	try {
		const { chatId,  amount, userId, instructorId, subscriptionType } = data;

		await producer.connect();
		const message: any = [
			// {
			// 	topic: "user-service-topic",
			// 	messages: [
			// 		{
			// 			key: "chatSubscriptionSuccess",
			// 			value: JSON.stringify({
			// 				userId,
			// 				amount,
			// 				instructorId
			// 			}),
			// 		},
			// 	],
			// },
			{
				topic: "chat-service-topic",
				messages: [
					{
						key: "chatSubscriptionSuccess",
						value: JSON.stringify({
							chatId,
							userId,
							subscriptionType
						}),
					},
				],
			},
			// {
			// 	topic: "auth-service-topic",
			// 	messages: [
			// 		{
			// 			key: "chatSubscriptionSuccess",
			// 			value: JSON.stringify({
			// 				userId,
			// 				amount,
			// 				instructorId
			// 			}),
			// 		},
			// 	],
			// },

		];

		await producer.sendBatch({ topicMessages: message });

		console.log(message, "chat subscription success produced ( payment-service )--->");
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};