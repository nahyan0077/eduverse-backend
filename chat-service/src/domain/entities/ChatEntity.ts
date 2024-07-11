import { Types } from "mongoose";

export interface ChatEntity {
    _id?: string | Types.ObjectId;
    participants: Types.ObjectId[] | string[];
    type?: 'individual' | 'group';
    status?: 'requested' | 'active' | 'block';
    lastSeen?: Date | string;
    groupName?: string | null;
    groupDescription?: string | null;
    unreadCounts?: number;
    subscriptionType?: "none" | "basic" | "standard" | "premium" ;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}