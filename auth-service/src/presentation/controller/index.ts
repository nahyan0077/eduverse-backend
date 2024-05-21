import { IDependancies } from "@/application/interfaces/IDependancies";
import { findUserByEmailController } from "./findUserByEmail";
import { signupController } from "./signup";
import { chechExistingUserNameController } from "./checkExistingUserName";


export const controllers = (dependancies: IDependancies) => {
    return{
        findUserByEmail: findUserByEmailController(dependancies),
        signup : signupController(dependancies),
        checkExistingUserName: chechExistingUserNameController(dependancies)
    }
}