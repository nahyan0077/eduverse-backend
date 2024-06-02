import { IDependencies } from "../interfaces/IDependencies";

export const verfiyInstructorUseCase = (dependencies: IDependencies) => {
    const { repositories: {verifyInstructor} } = dependencies
    return {
        execute: async (id: string) => {
            return await verifyInstructor(id)
        }
    }
}