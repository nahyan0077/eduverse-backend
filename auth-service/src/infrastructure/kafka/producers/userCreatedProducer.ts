import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: UserEntity) => {
	try {
		await producer.connect();
		const message: any = {
			topic: "user-service-topic",
			messages: [
				{
					key: "userCreated",
					value: JSON.stringify(data),
				},
			],
		};
		

		await producer.send(message);
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
