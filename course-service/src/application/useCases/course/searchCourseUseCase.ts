import { IDependencies } from "@/application/interfaces/IDependencies";

export const searchCourseUseCase = (dependencies: IDependencies) => {
    const { repositories: {searchCourse} } = dependencies
    return {
        execute: async (query: string) => {
            return await searchCourse(query)
        }
    }
}