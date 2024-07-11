import { IDependencies } from "../interfaces/IDependencies";

export const rejectInstructorUseCase = (dependencies: IDependencies) => {
    const { repositories: {rejectInstructor} } = dependencies
    return {
        execute: async (id: string) => {
            return await rejectInstructor(id)
        }
    }
}