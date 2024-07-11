import { Result } from "../../../../../infrastructure/database/mongodb/models";
import { ResultEntity } from "@/domain/entities";

export const getResultByUserId = async (
    userId: string
): Promise<ResultEntity[] | null> => {
    try {

        const examResults = await Result.find({userRef: userId}).populate("assessmentRef");

        return examResults;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}