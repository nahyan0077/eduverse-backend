import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: UserEntity) => {
	try {
		await producer.connect();
		const message: any = [

			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "userUpdated",
						value: JSON.stringify(data),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "userUpdated",
						value: JSON.stringify(data),
					},
				],
			},
		]

		console.log(message,"User update produced kafak");
		

		await producer.sendBatch({topicMessages: message});
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
