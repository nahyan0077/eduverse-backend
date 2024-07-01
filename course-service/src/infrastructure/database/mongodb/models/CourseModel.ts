import { Schema, model, Types } from "mongoose";
import { CourseEntity } from "../../../../domain/entities";

const lessonSchema = new Schema({
    lessonNumber: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    duration: {
        type: String,
    },
    objectives: {
        type: Array,
    }
});

const trialSchema = new Schema({
    video: {
        type: String
    }
});

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    instructorRef: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    categoryRef: {
        type: Types.ObjectId,
        ref: "categories",
        required: true
    },
    language: {
        type: String,
        default: "english"
    },
    lessons: [lessonSchema],
    trial: trialSchema,
    pricing: {
        type: {
            type: String,
            enum: ["free", "paid"],
            default: "free"
        },
        amount: {
            type: Number,
            default: 0
        }
    },
    attachments: {
        title: String,
        url: String
    },
    level: {
        type: String,
        enum: ["beginner","intermediate", "expert"]
    },
    isRequested: {
        type: Boolean,
        default: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    studentsEnrolled: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    isRejected: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

export const Course = model<CourseEntity>("courses", courseSchema);