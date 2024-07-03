import { Assessment } from "../../models";

export const getAssessmentsByCourseId = async (
    id: string
) => {
    try {
        const result = await Assessment.find({courseId: id});
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Assessment retrievel failed");
    }
}
