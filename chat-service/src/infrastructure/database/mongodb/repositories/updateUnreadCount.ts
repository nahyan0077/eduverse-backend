import { Chat } from "../models"

export const updateUnreadCount = async (data: any) => {
    try {
        const {_id, unreadCount} = data

        console.log(data,"check unred data");
        

        const updated = await Chat.findByIdAndUpdate(
            _id,
            { $set: { unreadCount } },
            { new: true }
        );

        if (!updated) {
            throw new Error("Unread count updation failed");
            
        }

        return updated

    } catch (error: any) {
        throw new Error(error?.message);
        
    }
}