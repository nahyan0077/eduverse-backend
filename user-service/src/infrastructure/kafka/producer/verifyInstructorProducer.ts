import { UserEntity } from "@/domain/entities";
import { producer } from "..";
import { string } from "joi";

export default async (data: { id: string ,email : string}) => {
	try {
		await producer.connect();
		const message: any = [

			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "verifyInstructor",
						value: JSON.stringify({id:data.id}),
					},
				],
			},
			{
				topic: "notification-service-topic",
				messages: [
					{
						key: "verifyInstructorMail",
						value: JSON.stringify({email: data.email}),
					},
				],
			},
		]

		console.log(message,"hee");
		

		await producer.sendBatch({topicMessages: message});
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};