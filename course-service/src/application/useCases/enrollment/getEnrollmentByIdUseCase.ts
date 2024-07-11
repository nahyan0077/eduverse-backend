import { IDependencies } from "../../interfaces/IDependencies";

export const getEnrollmentByIdUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { getEnrollmentById }
    } = dependencies;

    return {
        execute: async (id: string) => {
            return await getEnrollmentById(id);
        }
    }
    
};