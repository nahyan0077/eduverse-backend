import { producer } from "..";

export default async (data: { otp: string; email: string }) => {
	try {
		await producer.connect();

		const message = {
			topic: "auth-service-topic",
			messages: [
				{
					key: "sendVerificationMail",
					value: JSON.stringify(data),
				},
			],
		};

		await producer.send(message);
        
	} catch (error: any) {

		console.error("kafka produce error : ", error?.message);

	} finally {

		await producer.disconnect();

	}
};
