import { IDependencies } from "@/application/interfaces/IDependencies";
import { CourseEntity } from "@/domain/entities";

export const updateCourseUseCase = (dependencies: IDependencies) => {
    const { repositories: {updateCourse} } = dependencies
    return {
        execute: async (data: CourseEntity,incrementStudentsEnrolled: boolean) => {
            return await updateCourse(data, incrementStudentsEnrolled)
        }
    }
}