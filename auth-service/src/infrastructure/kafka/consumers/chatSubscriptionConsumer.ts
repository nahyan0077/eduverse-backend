import { updateUserProfit } from "../../../infrastructure/database/mongodb/repositories";


export const chatSubscriptionSuccessConsumer = async (
    data: any
) => {
    try {
        
        const update = await updateUserProfit(data.instructorId, data.amount)

        console.log("==========");
        console.log("updateUserProfit-consumed for chat subcription--->auth-services");
        console.log("==========");

    } catch (error: any) {
        console.log("update user profit-->user",error);
        
    }
}