import { UserEntity } from "@/domain/entities";
import { User } from "../models";

export const getAllInstructors = async (page?: number, limit?:number): Promise<UserEntity[] | null> => {
	try {

        const pageNo = page ?? 1
        const limitNo = limit ?? 10
        const skipNo = (pageNo - 1) * limitNo

		const data = await User.find({ role: "instructor" }).skip(skipNo).limit(limitNo);

		return data;
	} catch (error: any) {

		throw new Error(error?.message);
	}
};
