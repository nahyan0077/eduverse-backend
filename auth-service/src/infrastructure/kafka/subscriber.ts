import {
	verifyInstructorConsumer,
	rejectInstructorConsumer,
	sendVerificationMailConsumer,
	blockUnblockUserConsumer,
	updateUserConsumer,
	coursePurchaseSuccessConsumer,
} from "./consumers";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
	blockUnblockUser(data: any): Promise<void>;
	verifyInstructor(data: any): Promise<void>;
	rejectInstructor(data: any): Promise<void>;
	userUpdated(data: any): Promise <void>;
	coursePurchaseSuccess(data: any): Promise <void>;
}

export interface IAuthSubscriber
	extends Pick<
		ISubscriber,
		| "sendVerificationMail"
		| "blockUnblockUser"
		| "verifyInstructor"
		| "rejectInstructor"
		| "userUpdated"
		| "coursePurchaseSuccess"
	> {}

export const createSubscriber = (): IAuthSubscriber => {
	return {
		sendVerificationMail: sendVerificationMailConsumer,
		blockUnblockUser: blockUnblockUserConsumer,
		verifyInstructor: verifyInstructorConsumer,
		rejectInstructor: rejectInstructorConsumer,
		userUpdated: updateUserConsumer,
		coursePurchaseSuccess: coursePurchaseSuccessConsumer
	};
};
