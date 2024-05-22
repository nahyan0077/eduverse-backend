import { IOtp } from "@/domain/entities/OtpEntities";
import { Otp } from "../models/otpModel";

export const updateOtp = async (data: {
	email: string;
	otp: string;
}): Promise<IOtp | null> => {
	try {
		const { email, otp } = data;
		const result = await Otp.updateOne(
			{ email: email },
			{ $set: { otp: otp } },
			{ upsert: true, new: true }
		);

		if (!result) {
			throw new Error("OTP update/creation failed!");
		}

		const updatedUser = await Otp.findOne({ email: data.email });

		return updatedUser;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
