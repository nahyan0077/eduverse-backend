import { ReviewEntity } from "@/domain/entities";

export interface ICreateReviewUseCase {
    execute(data: ReviewEntity) : Promise <ReviewEntity | null> 
}