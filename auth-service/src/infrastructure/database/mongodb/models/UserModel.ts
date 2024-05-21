import { UserEntity } from "@/domain/entities";
import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			enum: ["student", "instructor", "admin","pending"],
			default: "pending",
		},
		profile: {
			avatar: {
				type: String,
			},
			dataOfBirth: {
				type: String,
			},
			gender: {
				type: String,
				enum: ["male", "female", "other"],
			},
		},
		contact: {
			address: {
				type: String,
			},
			phone: {
				type: String,
			},
			social: {
				type: String
			},
		},
		profession: {
            enum: ["student", "working"],
            type: String,
		},
		otp: {
            type: String,
		},
		profit: {
            type: Number,
			default: 0,
		},
        isBlocked: {
            type: Boolean,
            default: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
	},
	{
		timestamps: true,
	}
);


export const User = model<UserEntity>("users",userSchema)