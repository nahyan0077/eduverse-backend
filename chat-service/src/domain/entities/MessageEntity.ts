import { Types } from "mongoose";

export interface MessageEntity {
    _id?: string | Types.ObjectId;
    chatId: Types.ObjectId | string;
    senderId: Types.ObjectId | string;
    content: string;
    contentType: 'text' | 'image' | 'video' | 'audio' | 'application';
    receiverSeen: boolean;
    isDeleted?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}