import { User } from "@/infrastructure/database/mongodb/models";
import { UserEntity } from "@/domain/entities";

export const createUser = async (
    data: UserEntity
): Promise<UserEntity | null> => {
    try {

        const newUser = await User.create(data);

        if (!newUser) {
            throw new Error("User creation failed!");
        }

        return newUser;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}