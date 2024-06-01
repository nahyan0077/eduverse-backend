import { UserEntity } from "@/domain/entities";
import { User } from "../models"

export const blockUnblockUser = async (id: string, isBlocked: boolean): Promise<UserEntity | null> => {
    try {
        const updateUser = await User.findByIdAndUpdate(id,{isBlocked},{new: true})

        if (!updateUser) {

            return null;
        }

        return updateUser;

    } catch (error: any) {
        console.error(error);
        throw new Error(error.message);
    }
}