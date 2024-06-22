import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course } from "../../models/CourseModel";

export const getAllCourse = async (
	page: number = 1,
	limit: number = 5,
	search: string = "",

) => {
	try {
		const query: Record<string, any> = {};

		// Add search criteria to the query
		if (search) {
			query.$or = [
				{ title: { $regex: search, $options: "i" } }
			];
		}


		const totalCourses = await Course.countDocuments(query);

		console.log(totalCourses,"total cours");
		

		const result = await Course.find(query)
			.populate({
				path: "instructorRef",
				select: "firstName profile.avatar",
			})
			.populate("categoryRef", "categoryName")
			.sort({ updatedAt: "descending" })
			.skip((page - 1) * limit)
			.limit(limit);

		if (result.length === 0) {
			throw ErrorResponse.internalError("No courses found");
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
