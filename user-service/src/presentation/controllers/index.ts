import { IDependencies } from "@/application/interfaces/IDependencies";
import { getAllInstructorsController } from "./getAllInstructorsController";

export const controllers = (dependencies: IDependencies) => {
    return {
        getAllINstructors: getAllInstructorsController(dependencies)
    }
}