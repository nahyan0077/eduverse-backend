import { Assessment } from "../../../../../infrastructure/database/mongodb/models";
import { AssessmentEntity } from "@/domain/entities";

export const createAssessment = async (
    data: AssessmentEntity
): Promise<AssessmentEntity | null> => {
    try {

        const assessment = await Assessment.create(data);

        if (!assessment) {
            throw new Error("Assessment creation failed!");
        }

        return assessment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}