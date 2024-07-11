import { sendInstructorRejectionMail } from "../../../infrastructure/services/mail";



export default async (data: string) => {
	try {
		await sendInstructorRejectionMail(data);

		console.log("instructor reject consumer -------->");

	} catch (error: any) {
		console.log("insturctor rejection consumed mail send error: ", error?.message);
	}
};
