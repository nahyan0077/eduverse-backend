import { IDependencies } from "@/application/interfaces/IDependencies";
import {  createPaymentSessionController } from "./createPaymentSession";
import { getPaymentSessionController } from "./getPaymentSession";
import { createPaymentController } from "./createPayment";
import { getAllPaymentsController } from "./getAllPayments";

export const controllers = (dependencies: IDependencies) => {
    return {
        createSession: createPaymentSessionController(dependencies),
        getPaymentSession: getPaymentSessionController(dependencies),
        createPayment: createPaymentController(dependencies),
        getAllPayments: getAllPaymentsController(dependencies),
    }
}