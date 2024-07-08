import { CourseEntity } from "@/domain/entities";
import { ErrorResponse } from "@eduverse/common";
import { Course } from "../../models";

export const updateCourse = async (data: CourseEntity, incrementStudentsEnrolled: boolean): Promise<CourseEntity | null> => {
    try {
        const { _id, studentsEnrolled, ...updation } = data;

        console.log(data, "update course data in repo");
        console.log(incrementStudentsEnrolled, "bool stud enrolled");

        let updateObject: any = { ...updation };

        if (incrementStudentsEnrolled) {
            updateObject.$inc = { studentsEnrolled: 1 };
        }

        const result = await Course.findByIdAndUpdate(_id, updateObject, { new: true });

        console.log(result, "result of update course");

        if (!result) {
            throw ErrorResponse.internalError(`Error updating course`);
        }

        return result;
    } catch (error: any) {
        throw ErrorResponse.internalError(
            error.message || "An unexpected error occurred"
        );
    }
};