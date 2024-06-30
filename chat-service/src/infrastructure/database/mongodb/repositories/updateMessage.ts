import { Message } from "../models"

export const updateMessage = async (id: string) => {
    try {
        const result = await Message.findOneAndUpdate({_id:id}, {$set: {isDeleted: true}},{new: true})

        console.log(result,"resulttt");
        

        if (!result) {
            throw new Error("Delete chat error");
        }

        return result

    } catch (error: any) {
        throw new Error(error?.message || "An error occurred while deleting the chat");
        
    }
}