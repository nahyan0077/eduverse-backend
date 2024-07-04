import { Result } from "../../../../../infrastructure/database/mongodb/models";
import { ResultEntity } from "@/domain/entities";

export const getResultById = async (
    id: string
): Promise<ResultEntity | null> => {
    try {

        const examResult = await Result.findById(id).populate("assessmentRef");

        return examResult;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}