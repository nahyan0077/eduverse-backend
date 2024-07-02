import { CourseEntity } from "@/domain/entities";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";
import { Course } from "../../models/CourseModel";

export const updateCourse = async (data: CourseEntity, incrementStudentsEnrolled: boolean): Promise<CourseEntity | null> => {
    try {
        const { _id, ...updation } = data;

        // Build the update object
        const updateObject: any = { ...updation };

        // Conditionally add the $inc operation
        if (incrementStudentsEnrolled) {
            updateObject.$inc = { studentsEnrolled: 1 };
        }

        const result = await Course.findByIdAndUpdate(_id, updateObject, { new: true });

        if (!result) {
            throw new Error("Course not found");
        }

        return result;
    } catch (error: any) {
        throw ErrorResponse.internalError(
            error.message || "An unexpected error occurred"
        );
    }
};
