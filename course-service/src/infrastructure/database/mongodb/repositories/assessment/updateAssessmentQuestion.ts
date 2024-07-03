import { Assessment } from "../../../../../infrastructure/database/mongodb/models";
import { AssessmentEntity } from "@/domain/entities";

export const updateAssessmentQuestion = async (
    data: any
): Promise<AssessmentEntity | null> => {
    try {

        const { assessmentId, questionId, ...rest } = data;

        const updations = {
            $set: {
                'questions.$[que].question': rest.question,
                'questions.$[que].options': rest.options,
                'questions.$[que].answer': rest.answer,
            }
        }

        const assessment = await Assessment.findByIdAndUpdate({
            _id: assessmentId
        }, updations, {
            arrayFilters: [{ 'que._id': questionId }],
            new: true
        });

        if (!assessment) {
            throw new Error("Assessment updation failed!");
        }

        return assessment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
};