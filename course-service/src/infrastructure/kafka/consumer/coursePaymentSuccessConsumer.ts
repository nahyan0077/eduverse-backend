import { createEnrollment, getEnrollmentByUserId, updateUserProfit } from "../../../infrastructure/database/mongodb/repositories";

export const coursePurchaseSuccessConsumer = async (
    data: any
) => {
    try {        

        const existingEnrollments = await getEnrollmentByUserId(data.userId)

        const match = existingEnrollments?.find((item)=> item.courseId.toString() == data.courseId.toString())

        if (match) return

        await createEnrollment({
            userId: data.studentId,
            courseId: data.courseId,
            enrolledAt: Date.now().toString()
        })

        //updateing users profits
        await updateUserProfit(data.instructorId, data.amount)

        console.log("==========");
        console.log("updateUserProfit-consumed--->course-services");
        console.log("==========");
    } catch (error: any) {
        console.log("update user profit-->course",error);
    }
}