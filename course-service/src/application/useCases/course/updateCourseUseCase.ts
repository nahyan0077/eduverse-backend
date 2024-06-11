import { IDependencies } from "@/application/interfaces/IDependencies";
import { CourseEntity } from "@/domain/entities";

export const updateCourseUseCase = (dependencies: IDependencies) => {
    const { repositories: {updateCourse} } = dependencies
    return {
        execute: async (data: CourseEntity) => {
            return await updateCourse(data)
        }
    }
}