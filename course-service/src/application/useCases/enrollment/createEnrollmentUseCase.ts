import { IDependencies } from "@/application/interfaces/IDependencies";
import { EnrollmentEntity } from "../../../domain/entities/EnrollmentEntity";

export const createEnrollmentUseCase = (dependecies: IDependencies) => {
    const { repositories: {createEnrollment} } = dependecies
    return {
        execute: async (data: EnrollmentEntity) => {
            return await createEnrollment(data)
        }
    }
}