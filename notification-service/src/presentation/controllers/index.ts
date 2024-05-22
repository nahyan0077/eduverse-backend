import { IDependencies } from "@/application/interfaces/IDependencies";
import { sendVerifcationMailController } from "./sendVerificationMailController";

export const controllers = (dependencies: IDependencies) => {
    return {
        sendVerificationMail: sendVerifcationMailController(dependencies)
    }
}