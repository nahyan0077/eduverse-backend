import { ReviewEntity } from "@/domain/entities";

export interface IGetAllReviewsUseCase {
    execute(page: string | number, limit: string | number, courseId: string) : Promise <{ reviews: ReviewEntity[], totalPages: number, currentPage: number}> 
}