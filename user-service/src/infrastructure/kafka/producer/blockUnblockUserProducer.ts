import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: { id: string; isBlocked: boolean }) => {
	try {
		await producer.connect();
		const message: any = {
			topic: "auth-service-topic",
			messages: [
				{
					key: "blockUnblockUser",
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
