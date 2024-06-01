import { IDependencies } from "../interfaces/IDependencies";

export const blockUnblockUserUseCase = (dependencies: IDependencies) => {
    const { repositories: {blockUnblockUser} } = dependencies
    return {
        execute: async (id: string, isBlocked: boolean) => {
            return await blockUnblockUser(id, isBlocked)
        }
    }
}