import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course } from "../../models/CourseModel";

export const getAllActiveCourses = async (data: {
	page: string | number;
	limit: string | number;
}) => {
	try {
		const page = Number(data.page) || 1;
		const limit = Number(data.limit) || 6;
		const skip = (page - 1) * limit;

		const result = await Course.find({ isBlocked: false, isPublished: true })
			.populate({
				path: "instructorRef",
				select: "firstName profile.avatar" 
			})
			.populate("categoryRef", "categoryName")
			.sort({ updatedAt: "descending" })
			.skip(skip)
			.limit(limit);

		if (!result) {
			throw ErrorResponse.internalError("Active Course fetching failed..!");
		}
		return result;
	} catch (error: any) {
		throw ErrorResponse.internalError(
			error.message || "An unexpected error occurred"
		);
	}
};
