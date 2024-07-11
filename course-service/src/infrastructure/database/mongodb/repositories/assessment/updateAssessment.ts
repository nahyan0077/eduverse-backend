import { Assessment } from "../../../../../infrastructure/database/mongodb/models";
import { AssessmentEntity } from "@/domain/entities";

export const updateAssessment = async (
    data: AssessmentEntity
): Promise<AssessmentEntity | null> => {
    try {

        const { _id, ...updations } = data;
        console.log("==========>");
        
        console.log(data,"data");
        
        console.log("==========>");

        const assessment = await Assessment.findByIdAndUpdate(_id, updations, { new: true });

        console.log(assessment,"is updaed");
        


        if (!assessment) {
            throw new Error("Assessment updation failed!");
        }

        return assessment;

    } catch (error: any) {
        throw new Error(error?.message);
    }
}