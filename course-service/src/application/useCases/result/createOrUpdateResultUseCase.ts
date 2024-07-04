import { ResultEntity } from "@/domain/entities";
import { IDependencies } from "../../interfaces/IDependencies";

export const createOrUpdateResultUseCase = (dependencies: IDependencies) => {

    const {
        repositories: { createOrUpdateResult }
    } = dependencies;

    return {
        execute: async (data: ResultEntity) => {
            return await createOrUpdateResult(data);
        }
    }
};