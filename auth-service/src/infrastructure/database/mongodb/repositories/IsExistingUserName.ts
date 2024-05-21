import { User } from "../models";

export const isExistingUserName = async (
	username: string
): Promise<boolean | null> => {
	try {
		const existingUsername = await User.findOne({ username });
		if (!existingUsername) {
			return true;
		}
        return false
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
