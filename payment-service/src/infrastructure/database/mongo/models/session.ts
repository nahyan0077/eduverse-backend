import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
    sessionId: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export const Session = model("sessions", sessionSchema);