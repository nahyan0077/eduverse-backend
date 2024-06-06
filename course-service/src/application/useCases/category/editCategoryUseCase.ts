import { IDependencies } from "@/application/interfaces/IDependencies";
import { CategoryEntity } from "@/domain/entities";

export const editCategoryUseCase = (dependencies: IDependencies) => {
    const { repositories: {editCategory} } = dependencies
    return {
        execute: async (data: CategoryEntity) => {
            return await editCategory(data)
        }
    }
}