import { verifyInstructor } from "../../../infrastructure/database/mongodb/repositories";

export const verifyInstructorConsumer = async (data: {id: string}) => {
	try {
		await verifyInstructor(data.id);

        console.log("instructor verification consumed ------->");
        

	} catch (error: any) {
		throw new Error(error?.message);
	}
};
