import { IDependencies } from "@/application/interfaces/IDependencies";
import {  createPaymentSessionController } from "./createPaymentSession";
import { getPaymentSessionController } from "./getPaymentSession";
import { createPaymentController } from "./createPayment";
import { getAllPaymentsController } from "./getAllPayments";
import { createSubscriptionSessionController } from "./createSubscriptionSessionController";
import { createSubscripionPaymentController } from "./createSubscriptionPayment";

export const controllers = (dependencies: IDependencies) => {
    return {
        createSession: createPaymentSessionController(dependencies),
        getPaymentSession: getPaymentSessionController(dependencies),
        createPayment: createPaymentController(dependencies),
        getAllPayments: getAllPaymentsController(dependencies),
        createSubscriptionSession: createSubscriptionSessionController(dependencies),
        createSubscriptionPayment: createSubscripionPaymentController(dependencies),
    }
}