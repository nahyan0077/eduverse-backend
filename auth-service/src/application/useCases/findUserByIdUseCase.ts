import { IDependancies } from "../interfaces/IDependancies";

export const findUserByIdUseCase = (dependencies: IDependancies) => {
    const { repositories: {findUserById} } = dependencies
    return {
        execute: async (id: string) => {
            return await findUserById(id)
        }
    }
}