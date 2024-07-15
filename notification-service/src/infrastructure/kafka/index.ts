import { Kafka, Producer, Consumer, Partitioners } from "kafkajs";

// export const kafka = new Kafka({
// 	clientId: "notification-service",
//     // brokers: ["localhost:29092"]
//     brokers: ["apache-kafka-service:29092"]
// });

// export const producer: Producer = kafka.producer({
// 	createPartitioner: Partitioners.LegacyPartitioner,
// });
// export const consumer: Consumer = kafka.consumer({
// 	groupId: "notification-service-kafka-group",
// });

const kafka = new Kafka({
	clientId: 'notification-service',
	brokers: ['pkc-4j8dq.southeastasia.azure.confluent.cloud:9092'],
	ssl: true,
	sasl: {
	  mechanism: 'plain',
	  username: 'USVRQER7K47GY6TT',
	  password: '3xR6djn1FSLdsH82CzUy291MuYcZeUnDRhYPIJmC35RKg6SvYrqj860ATTyiVMRF'
	},
	connectionTimeout: 30000, // 30 seconds
	authenticationTimeout: 30000, // 30 seconds
  });
  
  const producer = kafka.producer();
  const consumer = kafka.consumer({ groupId: 'notification-service-kafka-group' });
  
  export { producer, consumer };