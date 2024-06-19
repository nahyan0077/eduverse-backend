import { UserEntity } from "@/domain/entities";
import { User } from "../../models";
import { Types } from "mongoose";

export const updateUserProfit = async (
	userId: string,
	amount: number
): Promise<UserEntity | null> => {
	try {
		const instructorProfit = amount * 0.7;
		const adminProfit = amount * 0.3;

		const updateInstructorProfit = await User.findByIdAndUpdate(
			userId,
			{ $inc: { profit: instructorProfit } },
			{ new: true }
		);

		console.log(instructorProfit,"instructor profit");
		

		const updateAdminProfit = await User.findOneAndUpdate(
			{ role: "admin" },
			{ $inc: { profit: adminProfit } },
			{ new: true }
		);

		return updateInstructorProfit;
	} catch (error: any) {
		console.error("Error updating user profit:", error);
		throw new Error(error?.message);
	}
};
