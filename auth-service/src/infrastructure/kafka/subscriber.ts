import sendVerificationMailConsumer from "./consumers/sendVerificationMailConsumer";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
}

export interface IAuthSubscriber
	extends Pick<ISubscriber, "sendVerificationMail"> {}

export const createSubscriber = (): IAuthSubscriber => {
	return {
		sendVerificationMail: sendVerificationMailConsumer,
	};
};
