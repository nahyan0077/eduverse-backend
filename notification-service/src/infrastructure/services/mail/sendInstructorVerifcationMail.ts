import { instructorVerificationMail } from "../../../_lib/utils/sendGrid/instructorVerificationMail";

export const sendInstructorVerifcationMail = async (email: string) => {
	try {
		await instructorVerificationMail({
			email: email,
		});
	} catch (error: any) {
		console.log(error);
	}
};
