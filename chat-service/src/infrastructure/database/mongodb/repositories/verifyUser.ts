import { User } from "../../../../infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";

export const verifyUser = async (
    data: { email: string, isVerified: boolean }
): Promise<UserEntity | null> => {
    try {

        const updated = await User.findOneAndUpdate({
            email: data.email
        }, {
            isVerified: data.isVerified
        }, {
            new: true
        });

        if (!updated) {
            throw new Error("User verification failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}