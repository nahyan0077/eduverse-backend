import { updateUserProfit } from "../../../infrastructure/database/mongo/respositories";


export const chatSubscriptionSuccessConsumer = async (
    data: any
) => {
    try {
        
        const update = await updateUserProfit(data.instructorId, data.amount)

        console.log("==========");
        console.log("updateUserProfit-consumed for chat subcription--->user-services");
        console.log("==========");

    } catch (error: any) {
        console.log("update user profit-->user",error);
        
    }
}