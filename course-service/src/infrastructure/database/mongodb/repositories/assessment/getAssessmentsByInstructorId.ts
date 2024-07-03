import { Assessment } from "../../models";

export const getAssessmentsByInstructorId = async (
    id: string
) => {
    try {
        const result = await Assessment.find({instructorId: id});
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Assessment retrievel failed");
    }
}
