import { Assessment } from "../../models";

export const getAllAssessments = async () => {
    try {
        const result = await Assessment.find({});
        return result;
    } catch (error: any) {
        throw new Error(error?.message || "Assessment retrievel failed");
    }
}
