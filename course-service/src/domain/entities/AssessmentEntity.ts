import { Types } from "mongoose";

export interface AssessmentEntity {
    _id: Types.ObjectId;
    instructorId: Types.ObjectId;
    courseId: Types.ObjectId;
    type: string;
    title: string;
    questions: {
        question: string;
        answer: string;
        options: {
            1: string;
            2: string;
            3: string;
            4: string;
        };
    }
    questionScore: number;
    totalScore: number;
    passingScore: number;
}