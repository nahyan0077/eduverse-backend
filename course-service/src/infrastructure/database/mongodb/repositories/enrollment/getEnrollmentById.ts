import { Enrollment } from "../../../../../infrastructure/database/mongodb/models";
import { EnrollmentEntity } from "../../../../../domain/entities";

export const getEnrollmentById = async (
    id: string
): Promise<EnrollmentEntity | null> => {
    try {

        const enrollment = await Enrollment.findById(id).populate("courseId");

        if (!enrollment) {
            throw new Error("Course enrollment failed!");
        }

        return enrollment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}