import {
	blockUnblockUserConsumer,
	rejectInstructorConsumer,
	updateUserConsumer,
	userCreatedConsumer,
	verifyInstructorConsumer,
} from "./consumer";

export interface ISubscriber {
	userUpdated: (data: any) => Promise<void>;
	userCreated: (data: any) => Promise<void>;
	blockUnblockUser: (data: any) => Promise<void>;
	verifyInstructor: (data: any) => Promise<void>;
	rejectInstructor: (data: any) => Promise<void>;
}

export interface IUserSubscriber
	extends Pick<
		ISubscriber,
		| "userUpdated"
		| "userCreated"
		| "blockUnblockUser"
		| "verifyInstructor"
		| "rejectInstructor"
	> {}

export const createSubscriber = (): IUserSubscriber => {
	return {
		userUpdated: updateUserConsumer,
		userCreated: userCreatedConsumer,
		blockUnblockUser: blockUnblockUserConsumer,
		verifyInstructor: verifyInstructorConsumer,
		rejectInstructor: rejectInstructorConsumer,
	};
};
