import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: UserEntity) => {
	try {
		await producer.connect();
		const message: any = [

			{
				topic: "user-service-topic",
				messages: [
					{
						key: "userCreated",
						value: JSON.stringify(data),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "userCreated",
						value: JSON.stringify(data),
					},
				],
			},
			{
				topic: "chat-service-topic",
				messages: [
					{
						key: "userCreated",
						value: JSON.stringify(data),
					},
				],
			},
		]

		
		await producer.sendBatch({topicMessages: message});

		console.log(message, "user created produced--->");

	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
