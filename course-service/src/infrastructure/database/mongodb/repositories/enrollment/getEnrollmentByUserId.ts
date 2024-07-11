import { Types } from "mongoose";
import { Enrollment } from "../../../../../infrastructure/database/mongodb/models";
import { EnrollmentEntity } from "@/domain/entities";

export const getEnrollmentByUserId = async (
	userId: string
): Promise<EnrollmentEntity[] | null> => {
	try {
		const enrollment = await Enrollment.find({ userId }).populate("courseId");

		if (!enrollment) {
			throw new Error("Course enrollment failed!");
		}

		return enrollment;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
