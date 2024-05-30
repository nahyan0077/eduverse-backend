import { IDependancies } from "@/application/interfaces/IDependancies";
import { findUserByEmailController } from "./findUserByEmail";
import { signupController } from "./signup";
import { chechExistingUserNameController } from "./checkExistingUserName";
import { verifyOtpController } from "./verifyOtpController";
import { loginController } from "./login";
import { googleAuthController } from "./googleAuth";
import { getUserController } from "./getUser";
import { logoutController } from "./logout";


export const controllers = (dependancies: IDependancies) => {
    return{
        findUserByEmail: findUserByEmailController(dependancies),
        signup : signupController(dependancies),
        checkExistingUserName: chechExistingUserNameController(dependancies),
        verifyOtp: verifyOtpController(dependancies),
        login: loginController(dependancies),
        googleAuth: googleAuthController(dependancies),
        getUser: getUserController(dependancies),
        logout: logoutController(dependancies)
    }
}