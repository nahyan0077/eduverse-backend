import { Course } from "../../models";

export const searchCourse = async (query: string) => {
	try {
		console.log(query, "query at repo");

		const courses = await Course.find({
			title: { $regex: new RegExp(query, "i") },
			isBlocked: false,
			isPublished: true,
		})
			.populate({
				path: "instructorRef",
				select: "firstName profile.avatar",
			})
			.populate("categoryRef", "categoryName");



		return courses;
	} catch (error: any) {
		console.log("serarch err", error);
		return [];
	}
};
