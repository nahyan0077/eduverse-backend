import { instructorRejectionMail } from "../../../_lib/utils/sendGrid";


export const sendInstructorRejectionMail = async (email: string) => {
	try {
		await instructorRejectionMail({
			email: email,
		});
	} catch (error: any) {
		console.log(error);
	}
};
