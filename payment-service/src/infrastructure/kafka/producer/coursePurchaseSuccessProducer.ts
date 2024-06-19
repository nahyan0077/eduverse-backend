import { PaymentEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: {
	studentId: string;
	courseId: string;
	amount: number;
	instructorId: string;
}) => {
	try {
		const { studentId, courseId, amount, instructorId } = data;

		await producer.connect();
		const message: any = [
			{
				topic: "user-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							instructorId,
							courseId: courseId,
							amount: amount,
							studentId
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
							instructorId,
							courseId: courseId,
							amount: amount,
							studentId
						}),
					},
				],
			},
			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							instructorId,
							courseId: courseId,
							amount: amount,
							studentId
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