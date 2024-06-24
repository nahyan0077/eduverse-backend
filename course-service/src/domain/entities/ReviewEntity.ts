import { Document } from "mongoose";

export interface ReviewEntity {
    userId: string;
    courseId: string;
    rating?: number;
    comment?: string;
    date?: Date;
  }