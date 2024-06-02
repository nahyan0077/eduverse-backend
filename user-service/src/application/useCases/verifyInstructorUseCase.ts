import { IDependencies } from "../interfaces/IDependencies";

export const verifyInstructorUseCase = (dependencies: IDependencies) => {
    const { repositories: {verifyInstructor} } = dependencies
    return {
        execute: async (id: string) => {
            return await verifyInstructor(id)
        }
    }
}