import { CourseEntity } from "@/domain/entities";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course } from "../../models/CourseModel";

export const updateCourse = async (data: CourseEntity): Promise<CourseEntity | null> => {
    try {
        const { _id, ...updation } = data;

        const result = await Course.findByIdAndUpdate(_id, updation, { new: true })
            .catch((error) => {
                throw ErrorResponse.internalError(`Error updating course: ${error.message}`);
            });

        return result;

    } catch (error: any) {
        throw ErrorResponse.internalError(
            error.message || "An unexpected error occurred"
        );
    }
}