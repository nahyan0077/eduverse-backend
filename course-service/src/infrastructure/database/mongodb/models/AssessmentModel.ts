
import { AssessmentEntity } from "@/domain/entities/AssessmentEntity";
import { Schema, Types, model } from "mongoose";

const questionShema = new Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        1: String,
        2: String,
        3: String,
        4: String
    },
    answer: {
        type: String,
        required: true
    }
})

const assessmentSchema = new Schema({
    instructorId: {
        type: Types.ObjectId,
        ref: "users",
        required: true
    },
    courseId: {
        type: Types.ObjectId,
        ref: "courses",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "exam"
    },
    questions: [questionShema],
    questionScore: {
        type: Number,
        required: true
    },
    totalScore: {
        type: Number,
        required: true
    },
    passingScore: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

export const Assessment = model<AssessmentEntity>("assessments", assessmentSchema);