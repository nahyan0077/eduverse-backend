import { UserEntity } from "@/domain/entities";
import { User } from "../models";

export const getAllStudents = async (page: number = 1, limit: number = 5, search?: string) => {
    try {
        const skipNo = (page - 1) * limit;

        const query: any = { role: "student" };

        if (search) {
            const searchQuery = new RegExp(search, "i");
            query.$or = [{ firstName: searchQuery }, { userName: searchQuery }];
        }

        const totalStudents = await User.countDocuments(query);

        const data = await User.find(query)
            .skip(skipNo)
            .limit(limit);

        return {
            data,
            totalPages: Math.ceil(totalStudents / limit),
            currentPage: page
        };
    } catch (error: any) {
        throw new Error(error?.message || "An unexpected error occurred");
    }
};
