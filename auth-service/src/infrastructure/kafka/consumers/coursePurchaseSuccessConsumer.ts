import { updateUserProfit } from "../../../infrastructure/database/mongodb/repositories";


export const coursePurchaseSuccessConsumer = async (
    data: any
) => {
    try {
        
        const update = await updateUserProfit(data.instructorId, data.amount)

        console.log("==========");
        console.log("updateUserProfit-consumed--->auth-services");
        console.log("==========");

    } catch (error: any) {
        console.log("update user profit-->user",error);
        
    }
}