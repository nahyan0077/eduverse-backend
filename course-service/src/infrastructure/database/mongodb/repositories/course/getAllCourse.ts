import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course } from "../../models/CourseModel"

export const getAllCourse = async () => {
    try {
        const result = await Course.find()

        if (!result) {
            throw ErrorResponse.internalError("get all course error");
        }
        return result

    } catch (error: any) {
        throw ErrorResponse.internalError(
            error.message || "An unexpected error occurred"
          );
    }
}