import { updateUser } from "../../../infrastructure/services/updateUser";


export const updateUserConsumer = async (
    data: any
) => {

    try {

        await updateUser();

        console.log("==========");
        console.log("user-updated-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("user-updated-consumed error: ", error?.message);
    }

}