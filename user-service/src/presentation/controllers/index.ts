import { IDependencies } from "@/application/interfaces/IDependencies";
import { getAllInstructorsController } from "./getAllInstructorsController";
import { getAllStudentsController } from "./getAllStudentsController";

export const controllers = (dependencies: IDependencies) => {
    return {
        getAllInstructors: getAllInstructorsController(dependencies),
        getAllStudents: getAllStudentsController(dependencies)
    }
}