import { ReviewEntity } from "@/domain/entities";
import { Review } from "../../models";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

export const createReview = async (data: ReviewEntity) => {
    try {
        const result = await Review.create(data)

        if (!result) {
            throw ErrorResponse.internalError("Error while creating review")
        }

        return result

    } catch (error: any) {
        throw ErrorResponse.internalError(error?.message)
    }
}