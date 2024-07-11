import { IDependencies } from "@/application/interfaces/IDependencies";

export const getCourseByIdUseCase = (depenedencies: IDependencies) => {
    const {repositories: {getCourseById}} = depenedencies

    return {
        execute: async (id: string ) => {
            return await getCourseById(id)
        }
    }
}