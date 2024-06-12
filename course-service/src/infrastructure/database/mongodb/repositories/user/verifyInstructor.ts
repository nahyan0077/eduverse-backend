import { User } from "../../models";

export const verifyInstructor = async (id: string) => {
	try {
		const verify = await User.findByIdAndUpdate(
			id,
			{ isVerified: true },
			{ new: true }
		);

		if (!verify) {
			throw new Error("instructor vefication failed");
		}

		return verify;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
