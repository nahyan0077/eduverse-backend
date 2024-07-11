import { updateChatSubscription } from "../../database/mongodb/repositories";

export const updateChatSubscriptionConsumer = async (
    data: any
) => {

    try {

        console.log(data,"chat subscribe dat");
        

        await updateChatSubscription(data);

        console.log("==========");
        console.log("user-chat-consumed");
        console.log("==========");

    } catch (error: any) {
        console.log("user-updated-consumed error: ", error?.message);
    }

}