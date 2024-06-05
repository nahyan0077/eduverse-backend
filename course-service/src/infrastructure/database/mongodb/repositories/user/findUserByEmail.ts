import { UserEntity } from "@/domain/entities";
import { User } from "../../../../../infrastructure/database/mongodb/models";

export const findUserByEmail = async (
	email: string
): Promise<UserEntity | null> => {
	try {
		const existingUser = await User.findOne({ email });
		return existingUser;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
