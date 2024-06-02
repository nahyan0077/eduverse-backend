import { updateOtpService } from "../../../infrastructure/services/updateOtpService";

export default async (data: { email: string; otp: string }) => {
	try {
		await updateOtpService(data.email, data.otp);


		console.log("send-verification-mail-consumed");

	} catch (error: any) {
		console.log("send-verification-mail-consumed error: ", error?.message);
	}
};
