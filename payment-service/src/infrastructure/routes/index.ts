import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { Router } from "express";

export const routes = (dependencies: IDependencies) => {
    const { createSession, getPaymentSession } = controllers(dependencies)

    const router = Router()

    router.route('/session').post(createSession)

    router.route('/').get(getPaymentSession)

    return router

}