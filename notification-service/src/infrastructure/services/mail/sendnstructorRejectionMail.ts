import { instructorRejectionMail } from "../../../_lib/utils/sendGrid";


export const sendInstructorRejectionMail = async (email: string) => {
	try {
		console.log(email,"here----");
		
		await instructorRejectionMail({
			email: email,
		});
		console.log("here11----");
	} catch (error: any) {
		console.log(" sendInstructorRejectionMail error: ",error);
	}
};
