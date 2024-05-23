import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: UserEntity) => {
	try {
		await producer.connect();
		const messages: any = {
			topic: "user-service-topic",
			message: [
				{
					key: "user-created",
					value: JSON.stringify(data),
				},
			],
		};

		await producer.send(messages);
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
