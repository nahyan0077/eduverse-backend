import { PaymentEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: {
	userId: string;
	courseId: string;
	amount: number;
	instructorId: string;
}) => {
	try {
		const { userId, courseId, amount, instructorId } = data;

		await producer.connect();
		const message: any = [
			{
				topic: "user-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							userId: instructorId,
							courseId: courseId,
							amount: amount,
						}),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							userId: userId,
							courseId: courseId,
							amount: amount,
						}),
					},
				],
			},
		];

		await producer.sendBatch({ topicMessages: message });

		console.log(message, "course purchase success produced--->");
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};