import { IDependencies } from "@/application/interfaces/IDependencies";
import {  createPaymentSessionController } from "./createPaymentSession";

export const controllers = (dependencies: IDependencies) => {
    return {
        createSession: createPaymentSessionController(dependencies)
    }
}