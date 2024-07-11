import { updateChatSubscriptionConsumer } from "./consumer";
import { userCreatedConsumer } from "./consumer/userCreatedConsumer";


export interface ISubscriber {
	chatSubscriptionSuccess: (data: any) => Promise<void>;
	userCreated: (data: any) => Promise <void>
}

export interface IChatSubscriber
	extends Pick<
		ISubscriber,
		| "chatSubscriptionSuccess"
		| "userCreated"

	> {}

export const createSubscriber = (): IChatSubscriber => {
	return {
		chatSubscriptionSuccess: updateChatSubscriptionConsumer,
		userCreated: userCreatedConsumer
	};
};
