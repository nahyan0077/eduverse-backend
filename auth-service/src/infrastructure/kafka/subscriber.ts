import { verifyInstructorConsumer } from "./consumers";
import blockUnblockUserConsumer from "./consumers/blockUnblockUserConsumer";
import sendVerificationMailConsumer from "./consumers/sendVerificationMailConsumer";

export interface ISubscriber {
	sendVerificationMail(data: any): Promise<void>;
	blockUnblockUser(data: any): Promise<void>
	verifyInstructor(data: any): Promise<void>
}

export interface IAuthSubscriber
	extends Pick<ISubscriber, "sendVerificationMail" | "blockUnblockUser" | "verifyInstructor" > {}

export const createSubscriber = (): IAuthSubscriber => {
	return {
		sendVerificationMail: sendVerificationMailConsumer,
		blockUnblockUser: blockUnblockUserConsumer,
		verifyInstructor: verifyInstructorConsumer
	};
};
