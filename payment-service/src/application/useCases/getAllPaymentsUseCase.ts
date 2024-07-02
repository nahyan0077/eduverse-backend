import { IDependencies } from "../interfaces/IDependencies";

export const getAllPaymentsUseCase = (dependencies: IDependencies) => {
    const { repositories: {getAllPayments} } = dependencies
    return {
        execute: async () => {
            return await getAllPayments()
        }
    }
}