import { User } from "../../../../infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";

export const updateRole = async (
    email: string, role: string
): Promise<UserEntity | null> => {
    try {

        const updated = await User.findOneAndUpdate({ email }, { role }, { new: true });

        if (!updated) {
            throw new Error("User updation failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}