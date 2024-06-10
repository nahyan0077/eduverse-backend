import { IDependencies } from "@/application/interfaces/IDependencies";

export const getAllActiveCourses = (dependencies: IDependencies) => {

    const { useCases: {getAllActiveCoursesUseCase} } = dependencies

    try {
        console.log("git check");
        
    } catch (error: any) {
        
    }
}