import { Result } from "../../models";
import { ResultEntity } from "@/domain/entities";

export const createOrUpdateResult = async (
    data: ResultEntity
): Promise<ResultEntity | null> => {
    try {
        const examResult = await Result.findOneAndUpdate(
            { userRef: data.userRef,assessmentRef: data.assessmentRef },
            data,
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        if (!examResult) {
            throw new Error("Exam result creation or update failed!");
        }

        return examResult;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
