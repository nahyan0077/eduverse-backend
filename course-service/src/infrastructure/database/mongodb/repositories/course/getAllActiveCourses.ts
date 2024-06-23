import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course } from "../../models/CourseModel";

export const getAllActiveCourses = async (data: {
	page: string | number;
	limit: string | number;
	search: string;
}) => {
	try {
		const page = Number(data.page);
		const limit = Number(data.limit);
		const skip = (page - 1) * limit;

		let query: any = { isBlocked: false, isPublished: true };

		if (data.search) {
			let searchRegx = new RegExp(data.search, "i");
			query.$or = [{ title: searchRegx }];
		}

		const totalCourses = await Course.countDocuments(query);

		const result = await Course.find(query)
			.populate({
				path: "instructorRef",
				select: "firstName profile.avatar",
			})
			.populate("categoryRef", "categoryName")
			.sort({ updatedAt: "descending" })
			.skip(skip)
			.limit(limit);

		if (!result) {
			throw ErrorResponse.internalError("Active Course fetching failed..!");
		}
		return {
			courses: result,
			totalPages: Math.ceil(totalCourses / limit),
			currentPage: page
		};
	} catch (error: any) {
		throw ErrorResponse.internalError(
			error.message || "An unexpected error occurred"
		);
	}
};
