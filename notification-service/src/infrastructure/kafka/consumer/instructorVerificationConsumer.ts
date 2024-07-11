import { sendInstructorVerifcationMail } from "../../../infrastructure/services/mail/sendInstructorVerifcationMail";


export default async (data: string) => {
	try {
		await sendInstructorVerifcationMail(data);

		console.log("instructor verified consumer -------->");

	} catch (error: any) {
		console.log("insturctor verified consumed mail send error: ", error?.message);
	}
};
