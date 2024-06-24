import { ReviewEntity } from "@/domain/entities";
import { Review } from "../../models";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

export const getAllReviews = async (
	page: number | string = 1,
	limit: number | string = 5,
	courseId: string
) => {
	try {
		const pageNo = Number(page);
		const limitNo = Number(limit);
		const skipNo = (pageNo - 1) * limitNo;

		const query: any = { courseId: courseId };

		const result = await Review.find(query)
			.populate({
				path: "userId",
				select: "firstName profile.avatar",
			})
			.skip(skipNo)
			.limit(limitNo);

		const totalReviews = await Review.countDocuments();

		if (!result) {
			throw ErrorResponse.internalError("Error while fetching review");
		}

		return {
			reviews: result,
			totalPages: Math.ceil(totalReviews / limitNo),
			currentPage: pageNo,
		};
	} catch (error: any) {
		throw ErrorResponse.internalError(error?.message);
	}
};
