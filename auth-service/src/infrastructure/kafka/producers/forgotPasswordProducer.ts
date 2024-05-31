import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: { email: string; token: string }) => {
	try {
		await producer.connect();
		const message: any = {
			topic: "notification-service-topic",
			messages: [
				{
					key: "forgotPassword",
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
