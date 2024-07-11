import ErrorResponse from "../../../../_lib/common/error/errorResponse";
import { UserEntity } from "@/domain/entities";
import { User } from "../models";

export const updateUser = async (
	data: UserEntity
): Promise<UserEntity | null> => {
	try {
		const { _id, ...rest } = data;

		const updatedUser = await User.findByIdAndUpdate(
			_id,
			{ $set: { ...rest } },
			{ new: true } 
		)

		if (!updatedUser) {
			throw ErrorResponse.internalError("Update user error");
		}

		return updatedUser as UserEntity;
	} catch (error: any) {
		if (error.code === 11000) {
			throw ErrorResponse.conflict("This username already exists");
		}
		throw ErrorResponse.internalError(error.message || "An unknown error occurred");
	}
};
