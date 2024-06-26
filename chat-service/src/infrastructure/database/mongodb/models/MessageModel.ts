import { MessageEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const messageSchema = new Schema<MessageEntity>({
    chatId: {
        type: Schema.Types.ObjectId,
        ref: "chats",
        required: true
    },
    senderId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        enum: ['text', 'image', 'audio', 'video', 'file'],
        default: 'text'
    },
    recieverSeen: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const Message = model("messages", messageSchema);
