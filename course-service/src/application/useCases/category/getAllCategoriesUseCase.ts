import { IDependencies } from "@/application/interfaces/IDependencies";

export const getAllCategoriesUseCase = (dependencies: IDependencies) => {
    const { repositories: {getAllCategories} } = dependencies
    return {
        execute: async () => {
            return await getAllCategories()
        }
    }
}