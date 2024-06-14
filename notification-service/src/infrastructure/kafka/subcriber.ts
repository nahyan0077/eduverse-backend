import forgotPasswordConsumer from "./consumer/forgotPasswordConsumer";
import instructorVerificationConsumer from "./consumer/instructorVerificationConsumer";
import instructorRejectionConsumer from "./consumer/instructorRejectionConsumer";
import { updateUserConsumer } from "./consumer/updateUserConsumer";

interface ISubscriber {
	forgotPassword(data: any): Promise<void>;
	verifyInstructorMail(data: any): Promise<void>;
	rejectInstructorMail(data: any): Promise<void>;
	userUpdated(data: any): Promise<void>;
}

export interface INotificationSubscriber
	extends Pick<
		ISubscriber,
		"forgotPassword" | "verifyInstructorMail" | "rejectInstructorMail" | "userUpdated"
	> {}

export const createSubscriber = (): INotificationSubscriber => {
	return {
		forgotPassword: forgotPasswordConsumer,
		verifyInstructorMail: instructorVerificationConsumer,
		rejectInstructorMail: instructorRejectionConsumer,
		userUpdated: updateUserConsumer
	};
};
