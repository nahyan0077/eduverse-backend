import { IDependencies } from "@/application/interfaces/IDependencies";

export const getInstructorsByStudentUseCase = (dependancies: IDependencies) => {
    const { repositories: {getInstructorsByStudent} } = dependancies
    return {
        execute: async (studentId: string) => {
            return await getInstructorsByStudent(studentId)
        }
    }
}