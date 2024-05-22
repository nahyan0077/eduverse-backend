import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: UserEntity, topic?: string) => {
	try {
		await producer.connect();
		const messages: any = {
			topic,
			message: [
				{
					key: process.env.USER_CREATED_TOPIC,
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
