import { Schema, model } from "mongoose";

const subscriptionPaymentSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		chatId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
		method: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "completed", "failed", "refunded"],
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
        subscriptionType: {
            type: String,
            enum: ["basic", "standard", "premium", null]
        }
	},
	{
		timestamps: true,
	}
);

export const SubscriptionPayment = model("subscription-payments", subscriptionPaymentSchema);
