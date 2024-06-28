import { Chat } from "../models"

export const updateLastSeen = async (userId: string) => {
    try {
        
        const currentTime = new Date();

        const updatLastSeen = await Chat.updateMany({participants: userId},{$set: {lastSeen: currentTime}})

        if (!updatLastSeen) {
            throw new Error("Update last seen error");
            
        }

        console.log(`Last seen updated for user: ${userId} at ${currentTime}`);

    } catch (error: any) {
        console.log(error?.message);
        
    }
}