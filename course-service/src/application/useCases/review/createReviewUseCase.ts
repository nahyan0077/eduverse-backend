import { IDependencies } from "@/application/interfaces/IDependencies";
import { ReviewEntity } from "@/domain/entities";

export const createReviewUseCase = (dependancies: IDependencies) => {
    const { repositories: {createReview} } = dependancies

    return{
        execute: async (data: ReviewEntity) => {
            return await createReview(data)
        }
    }
}