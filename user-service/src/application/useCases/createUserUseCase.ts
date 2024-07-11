import { UserEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const createUserUseCase = (depandancies: IDependencies) => {
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