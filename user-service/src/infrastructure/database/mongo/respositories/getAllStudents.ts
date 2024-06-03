import { UserEntity } from "@/domain/entities";
import { User } from "../models";

export const getAllStudents = async (page?: number, limit?:number): Promise<UserEntity[] | null> => {
	try {

        const pageNo = page ?? 1
        const limitNo = limit ?? 10
        const skipNo = (pageNo - 1) * limitNo

		const data = await User.find({ role: "student" }).skip(skipNo).limit(limitNo);
		console.log(data,"studuuuu");
		
		return data;
	} catch (error: any) {

		throw new Error(error?.message);
	}
};
