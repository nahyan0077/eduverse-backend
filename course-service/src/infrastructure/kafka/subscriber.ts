import {
	blockUnblockUserConsumer,
	rejectInstructorConsumer,
	updateUserConsumer,
	userCreatedConsumer,
	verifyInstructorConsumer,
} from "./consumer";

export interface ISubscriber {
	updateUser: (data: any) => Promise<void>;
	userCreated: (data: any) => Promise<void>;
	blockUnblockUser: (data: any) => Promise<void>;
	verifyInstructor: (data: any) => Promise<void>;
	rejectInstructor: (data: any) => Promise<void>;
}

export interface IUserSubscriber
	extends Pick<
		ISubscriber,
		| "updateUser"
		| "userCreated"
		| "blockUnblockUser"
		| "verifyInstructor"
		| "rejectInstructor"
	> {}

export const createSubscriber = (): IUserSubscriber => {
	return {
		updateUser: updateUserConsumer,
		userCreated: userCreatedConsumer,
		blockUnblockUser: blockUnblockUserConsumer,
		verifyInstructor: verifyInstructorConsumer,
		rejectInstructor: rejectInstructorConsumer,
	};
};
