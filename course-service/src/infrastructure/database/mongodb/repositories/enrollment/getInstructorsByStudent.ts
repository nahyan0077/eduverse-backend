import ErrorResponse from "../../../../../_lib/common/error/errorResponse"
import { Course, Enrollment } from "../../models"

export const getInstructorsByStudent = async (studentId: string) => {
    try {
        
        const enrollments = await Enrollment.find({userId: studentId })
        

        const courseIds = enrollments.map((enrolls) => enrolls.courseId)
        

        const courses = await Course.find({_id: {$in: courseIds}}).populate('instructorRef')
        

        return courses

    } catch (error: any) {
        throw ErrorResponse.internalError(error?.message)
    }
}