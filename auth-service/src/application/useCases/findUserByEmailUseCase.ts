import { IDependancies } from "../interfaces/IDependancies";


export const findUserByEmailUseCase = (dependancies: IDependancies) => {
    const { repositories:{findUserByEmail} } = dependancies
    return {
        execute: async (email: string) => {
            return await findUserByEmail(email)
        }
    }
}