import { Course } from "../../models"

export const getCoursesByInstructorId = async (instructorId: string) => {
    try {
        const result = await Course.find({instructorRef: instructorId})

        

        if (!result) {
            throw new Error("No courses found");
        }

        return result

    } catch (error: any) {
        throw new Error(error?.message);
        
    }
}