import { IDependencies } from "@/application/interfaces/IDependencies";
import {  createPaymentSessionController } from "./createPaymentSession";
import { getPaymentSessionController } from "./getPaymentSession";

export const controllers = (dependencies: IDependencies) => {
    return {
        createSession: createPaymentSessionController(dependencies),
        getPaymentSession: getPaymentSessionController(dependencies),
    }
}