import { Schema, model } from "mongoose";

const subscriptionSessionSchema = new Schema({
    sessionId: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    chatId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export const SubscriptionSession = model("subscription-sessions", subscriptionSessionSchema);