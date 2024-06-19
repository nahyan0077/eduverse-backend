import { updateUserProfit } from "../../../infrastructure/database/mongo/respositories"

export const coursePurchaseSuccessConsumer = async (
    data: {
        userId: string,
        amount: number
    }
) => {
    try {
        
        const update = await updateUserProfit(data.userId, data.amount)

        console.log("==========");
        console.log("updateUserProfit-consumed--->user-services");
        console.log("==========");

    } catch (error: any) {
        console.log("update user profit-->user",error);
        
    }
}