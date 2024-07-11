import { rejectInstructor } from "../../../infrastructure/database/mongodb/repositories";

export const rejectInstructorConsumer = async (data: {id: string}) => {
	try {
		await rejectInstructor(data.id);

        console.log("instructor rejection consumed ------->");
        

	} catch (error: any) {
		throw new Error(error?.message);
	}
};
