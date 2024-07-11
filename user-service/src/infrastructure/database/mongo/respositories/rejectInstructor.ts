import { User } from "../models";

export const rejectInstructor = async (id: string) => {
	try {
		const result = await User.findByIdAndUpdate(
			id,
			{ isRejected: true, isRequested: false },
			{ new: true }
		);

        if (!result) {
            throw new Error("instructor rejection failed!");
        }

		return result;
	} catch (error: any) {
		console.error("reject instructor error:", error?.message);
		throw new Error(`reject instructor error: ${error?.message}`);
	}
};
