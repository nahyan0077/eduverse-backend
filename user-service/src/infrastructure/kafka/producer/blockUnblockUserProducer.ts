import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: { id: string; isBlocked: boolean }) => {
	try {
		await producer.connect();
		const message: any = [

			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "blockUnblockUser",
						value: JSON.stringify(data),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "blockUnblockUser",
						value: JSON.stringify(data),
					},
				],
			},
		]

		await producer.sendBatch({topicMessages: message});

		console.log("block unblock user produced kafka");
		

	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
