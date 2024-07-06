import {
	chatSubscriptionSuccessConsumer,
	coursePurchaseSuccessConsumer,
	userCreatedConsumer,
} from "./consumer";

export interface ISubscriber {
	userCreated: (data: any) => Promise<void>;
	coursePurchaseSuccess: (data: any) => Promise<void>;
	chatSubscriptionSuccess: (data: any) => Promise<void>;
}

export interface IUserSubscriber
	extends Pick<
		ISubscriber,
		"userCreated" | "coursePurchaseSuccess" | "chatSubscriptionSuccess"
	> {}

export const createSubscriber = (): IUserSubscriber => {
	return {
		userCreated: userCreatedConsumer,
		coursePurchaseSuccess: coursePurchaseSuccessConsumer,
		chatSubscriptionSuccess: chatSubscriptionSuccessConsumer,
	};
};
