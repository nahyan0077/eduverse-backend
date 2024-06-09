import { IDependencies } from "@/application/interfaces/IDependencies";

export const getAllCourseUseCase = (dependencies: IDependencies) => {
    const { repositories: {getAllCourse} } = dependencies
    return {
        execute: async () => {
            return await getAllCourse()
        }
    }
}