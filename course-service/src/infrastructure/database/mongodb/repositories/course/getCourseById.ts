import ErrorResponse from "../../../../../_lib/common/error/errorResponse"
import { Course } from "../../models"

export const getCourseById = async (id: string) => {
    try {
        const result = await Course.findById(id).populate(["instructorRef", "categoryRef"])
        return result
    } catch (error: any) {
        throw ErrorResponse.internalError("Get course by id failed")
    }
}