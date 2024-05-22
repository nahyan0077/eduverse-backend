import { updateOtp } from "../database/mongodb/repositories/updateOtp";

export const updateOtpService = async (email: string, otp: string) => {
	try {
		await updateOtp({ email, otp });
	} catch (error: any) {
		console.log(error);
	}
};