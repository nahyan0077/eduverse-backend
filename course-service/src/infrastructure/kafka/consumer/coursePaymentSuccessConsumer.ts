import { updateUserProfit } from "../../../infrastructure/database/mongodb/repositories";

export const coursePurchaseSuccessConsumer = async (
    data: {
        userId: string,
        amount: number
    }
) => {
    try {
        const update = await updateUserProfit(data.userId, data.amount)

        console.log("==========");
        console.log("updateUserProfit-consumed--->course-services");
        console.log("==========");
    } catch (error: any) {
        console.log("update user profit-->course",error);
    }
}