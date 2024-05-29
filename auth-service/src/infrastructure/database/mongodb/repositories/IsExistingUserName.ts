import { User } from "../models";

export const isExistingUserName = async (
	userName: string
): Promise<boolean | null> => {
	try {
		const existingUsername = await User.findOne({ userName });
		if (!existingUsername) {
			return true;
		}
        return false
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
