import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course, Enrollment } from "../../models";

export const getStudentsEnrolledByInstructor = async (instructorId: string) => {
	try {
		const courses = await Course.find({ instructorRef: instructorId });

		const courseIds = courses.map((course) => course._id);

		const enrollments = await Enrollment.find({
			courseId: { $in: courseIds },
		}).populate("userId");

		return enrollments;
        
	} catch (error: any) {
		throw ErrorResponse.internalError(error?.message);
	}
};
