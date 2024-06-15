import { IDependencies } from "@/application/interfaces/IDependencies";

export const getAllActiveCategoriesUseCase = (dependencies: IDependencies) => {
    const { repositories: {getAllActiveCategories} } = dependencies
    return {
        execute: async () => {
            return await getAllActiveCategories()
        }
    }
}