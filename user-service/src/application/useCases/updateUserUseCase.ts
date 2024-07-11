import { UserEntity } from "@/domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const updateUserUseCase = (dependecies: IDependencies) => {
    const { repositories: {updateUser} } = dependecies
    return {
        execute: async (data: UserEntity) => {
            return await updateUser(data)
        }
    }
}