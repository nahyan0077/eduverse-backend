import { CourseEntity } from "@/domain/entities";
import { Course } from "../../models/CourseModel";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

export const createCourse = async ( data: CourseEntity ): Promise < CourseEntity | null > => {
    try {
        const course = await Course.create(data)
        if (!course) {
            throw ErrorResponse.internalError("Course creation failed..!")
        }
        return course
    } catch (error: any) {
        throw ErrorResponse.internalError(
            error.message || "An unexpected error occurred"
          );
    }
}