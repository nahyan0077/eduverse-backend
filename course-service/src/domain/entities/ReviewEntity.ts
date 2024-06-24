

export interface ReviewEntity {
    userId: string;
    courseId: string;
    rating?: number;
    comment?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }