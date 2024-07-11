import { UserEntity } from "@/domain/entities";
import { producer } from "..";

export default async (data: { id: string ,email : string}) => {
	try {
		await producer.connect();
		const message: any = [

			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "rejectInstructor",
						value: JSON.stringify({id:data.id}),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "rejectInstructor",
						value: JSON.stringify({id:data.id}),
					},
				],
			},
		]

		console.log(message,"reject intstructor kafak");
		

		await producer.sendBatch({topicMessages: message});
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};
