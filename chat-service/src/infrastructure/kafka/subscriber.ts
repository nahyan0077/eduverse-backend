import { updateChatSubscriptionConsumer } from "./consumer";


export interface ISubscriber {
	chatSubscriptionSuccess: (data: any) => Promise<void>;
}

export interface IChatSubscriber
	extends Pick<
		ISubscriber,
		| "chatSubscriptionSuccess"

	> {}

export const createSubscriber = (): IChatSubscriber => {
	return {
		chatSubscriptionSuccess: updateChatSubscriptionConsumer,

	};
};
