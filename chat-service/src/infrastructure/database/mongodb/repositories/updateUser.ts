import { User } from "@/infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";

export const updateUser = async (
    data: UserEntity
): Promise<UserEntity | null> => {
    try {

        const { _id, ...rest } = data;

        const updated = await User.findByIdAndUpdate(_id, {
            $set: { ...rest }
        }, {
            new: true
        });

        if (!updated) {
            throw new Error("User updation failed!");
        }

        return updated;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}