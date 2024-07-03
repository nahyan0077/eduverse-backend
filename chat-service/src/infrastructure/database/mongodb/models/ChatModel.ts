import { ChatEntity } from "@/domain/entities";
import { Schema, model } from "mongoose";

const chatSchema = new Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }],
    type: {
        type: String,
        enum: ['individual', 'group'],
        default: 'individual'
    },
    status: {
        type: String,
        enum:['requested', 'active', 'block'],
        default: 'requested'
    },
    lastSeen: {
        type: Date
    },
    unreadCounts: {
        type: Number,
        default: 0,
    },
    groupName: {
        type: String
    },
    groupDescription: {
        type: String
    }
}, {
    timestamps: true
});

export const Chat = model<ChatEntity>("chats", chatSchema);