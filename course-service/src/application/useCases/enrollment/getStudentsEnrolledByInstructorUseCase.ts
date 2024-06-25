import { IDependencies } from "@/application/interfaces/IDependencies";

export const getStudentsEnrolledByInstructorUseCase = (dependancies: IDependencies) => {
    const { repositories: {getStudentsEnrolledByInstructor} } = dependancies
    return {
        execute: async (instructorId: string) => {
            return await getStudentsEnrolledByInstructor(instructorId)
        }
    }
}