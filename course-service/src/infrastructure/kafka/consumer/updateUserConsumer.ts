import { UserEntity } from "@/domain/entities";
import { updateUser } from "../../../infrastructure/database/mongodb/repositories";

export const updateUserConsumer = async (
    data: UserEntity
) => {

    try {

        await updateUser(data);

        console.log("==========");
        console.log("user-updated-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("user-updated-consumed error: ", error?.message);
    }

}