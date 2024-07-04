import { Schema, model } from "mongoose";
import { ResultEntity } from "@/domain/entities/ResultEntity";

const resultSchema = new Schema({
    assessmentRef: {
        type: Schema.Types.ObjectId,
        ref: "assessments",
        required: true
    },
    userRef: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    isPassed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const Result = model<ResultEntity>("results", resultSchema);