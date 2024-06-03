import { consumer } from "../infrastructure/kafka"
import { IUserSubscriber, createSubscriber } from "../infrastructure/kafka/subscriber";



export const startConsumer = async () => {
    try {
        await consumer.connect()
        await consumer.subscribe({
            topic: 'user-service-topic',
            fromBeginning: true
        })

        const subscriber = createSubscriber();

        await consumer.run({

            eachMessage: async ({ message }) => {

                const { key, value } = message;

                const subscriberMethod = String(key) as keyof IUserSubscriber;
                const subscriberData = JSON.parse(String(value));

                try {
                    await subscriber[subscriberMethod](subscriberData);
                } catch (error: any) {
                    throw new Error(error?.message);
                }
            }

        });
    } catch (error: any) {
        throw new Error("Kafka Consume Error : " + error?.message);
    }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}