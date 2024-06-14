import { User } from "../../models";

export const rejectInstructor = async (id: string) => {
	try {
		const reject = await User.findByIdAndUpdate(
			id,
			{ isRejected: true, isRequested: false },
			{ new: true }
		);

		if (!reject) {
			throw new Error("instructor rejection failed");
		}

		return reject;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
