import { UserEntity } from "@/domain/entities";
import { IDependancies } from "../interfaces/IDependancies";

export const createUserUseCase = (depandancies: IDependancies) => {
    const { repositories: {createUser} } = depandancies
    return {
        execute: async (data: UserEntity) => {
            try {
                return await createUser(data)
            } catch (error: any) {
                throw new Error(error.message || "User creation failed");
            }
        }
    }
}