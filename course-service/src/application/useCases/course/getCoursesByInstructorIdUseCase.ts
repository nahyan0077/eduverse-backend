import { IDependencies } from "@/application/interfaces/IDependencies";

export const getCoursesByInstructorIdUseCase = (dependancies: IDependencies) => {
    const { repositories:{getCoursesByInstructorId} } = dependancies
    return {
            execute: async  (instructorId: string) => {
            return await getCoursesByInstructorId(instructorId)
        }
    } 
}