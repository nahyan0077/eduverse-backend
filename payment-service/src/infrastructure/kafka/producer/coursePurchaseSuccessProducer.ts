
import { PaymentEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: PaymentEntity) => {
	try {
		await producer.connect();
		const message: any = [

			{
				topic: "user-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify(data),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify(data),
					},
				],
			},
		]

		
		await producer.sendBatch({topicMessages: message});

		console.log(message, "course purchase success produced--->");

	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
