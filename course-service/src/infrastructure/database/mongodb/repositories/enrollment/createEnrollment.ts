import { EnrollmentEntity } from "../../../../../domain/entities/EnrollmentEntity";
import { Enrollment } from "../../../../../infrastructure/database/mongodb/models/EnrollmentModel";

export const createEnrollment = async (data: EnrollmentEntity): Promise <EnrollmentEntity | null> => {
    try {
        const enrolled = await Enrollment.create(data)

        if (!enrolled) {
            throw new Error("Course enrollment failed!");
        }

        return enrolled;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}