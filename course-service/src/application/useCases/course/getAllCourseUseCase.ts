import { IDependencies } from "@/application/interfaces/IDependencies";

export const getAllCourseUseCase = (dependencies: IDependencies) => {
    const { repositories: { getAllCourse } } = dependencies;
    return {
        execute: async (page: number, limit: number, search: string) => {
            return await getAllCourse(page, limit, search);
        }
    };
};
