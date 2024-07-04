import { Result } from "../../../../../infrastructure/database/mongodb/models";
import { ResultEntity } from "@/domain/entities";

export const getAllResults = async (): Promise<ResultEntity[] | null> => {
    try {

        const examResults = await Result.find({}).populate("assessmentRef");

        return examResults;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}