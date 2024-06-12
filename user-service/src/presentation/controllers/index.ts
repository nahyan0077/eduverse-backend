import { IDependencies } from "@/application/interfaces/IDependencies";
import { getAllInstructorsController } from "./getAllInstructorsController";
import { getAllStudentsController } from "./getAllStudentsController";
import { blockUnblockUserController } from "./blockUnblockUserController";
import { verfiyInstructorController } from "./verifyInstructorController";
import { rejectInstructorController } from "./rejectInstructorController";
import { updateUserController } from "./updateUserController";

export const controllers = (dependencies: IDependencies) => {
    return {
        getAllInstructors: getAllInstructorsController(dependencies),
        getAllStudents: getAllStudentsController(dependencies),
        blockUnblockUser: blockUnblockUserController(dependencies),
        verifyInstructor: verfiyInstructorController(dependencies),
        rejectInstructor: rejectInstructorController(dependencies),
        updateUser: updateUserController(dependencies)
    }
}