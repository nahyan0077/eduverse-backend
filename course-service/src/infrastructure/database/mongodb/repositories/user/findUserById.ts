import { UserEntity } from "@/domain/entities";
import { User } from "../../../../../infrastructure/database/mongodb/models";

export const findUserById = async (id: string): Promise <UserEntity | null> => {
    try {
        
        const existingUser = await User.findById(id)

        if (!existingUser) {
            throw new Error("User does not exist!");
        }

        return existingUser

    } catch (error: any) {

        throw new Error(error?.message);
        
    }
}