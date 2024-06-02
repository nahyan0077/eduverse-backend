import { User } from "../models";

export const verifyInstructor = async (id: string) => {
	try {
		const result = await User.findByIdAndUpdate(
			id,
			{ isVerified: true },
			{ new: true }
		);

        if (!result) {
            throw new Error("instructor verification failed!");
        }

		return result;
	} catch (error: any) {
		console.error("verify instructor error:", error?.message);
		throw new Error(`verify instructor error: ${error?.message}`);
	}
};
