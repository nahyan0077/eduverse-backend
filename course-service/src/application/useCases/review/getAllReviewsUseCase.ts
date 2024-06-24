import { IDependencies } from "@/application/interfaces/IDependencies";
import { ReviewEntity } from "@/domain/entities";

export const getAllReviewsUseCase = (dependancies: IDependencies) => {
    const { repositories: {getAllReviews} } = dependancies

    return{
        execute: async (page: string | number, limit: string | number, courseId: string) => {
            return await getAllReviews(page,limit,courseId)
        }
    }
}