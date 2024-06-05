import { CategoryEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const addCategoryUseCase = (dependencies: IDependencies) => {
    const { repositories: {addCategory} } = dependencies
    return {
        execute : async (data: CategoryEntity) =>{
            return await addCategory(data)
        }
    }
}