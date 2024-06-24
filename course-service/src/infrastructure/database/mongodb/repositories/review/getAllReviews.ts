import { ReviewEntity } from "@/domain/entities";
import { Review } from "../../models";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

export const getAllReviews = async (page: number | string = 1, limit: number | string = 5) => {
	try {

        const pageNo = Number(page);
		const limitNo = Number(limit);
		const skipNo = (pageNo - 1) * limitNo;

		const result = await Review.find()
			.populate("userId", "userName")
			.skip(skipNo)
			.limit(limitNo);

        const totalReviews = await Review.countDocuments()

		if (!result) {
			throw ErrorResponse.internalError("Error while fetching review");
		}

		return {
            reviews: result,
            totalPages: Math.ceil(totalReviews / limitNo),
            currentPage: pageNo
        };
	} catch (error: any) {
		throw ErrorResponse.internalError(error?.message);
	}
};
