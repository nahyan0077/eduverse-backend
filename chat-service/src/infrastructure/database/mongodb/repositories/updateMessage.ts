import { Message } from "../models"

export const updateMessage = async (data: any) => {
    try {

        const {_id, ...updation} = data

        const result = await Message.findByIdAndUpdate(_id, updation ,{new: true})

        console.log(result,"resulttt");
        

        if (!result) {
            throw new Error("update message error");
        }

        return result

    } catch (error: any) {
        throw new Error(error?.message || "An error occurred while updating message");
        
    }
}