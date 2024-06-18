import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { Router } from "express";

export const routes = (dependencies: IDependencies) => {
    const { createSession } = controllers(dependencies)

    const router = Router()

    router.route('/session').post(createSession)

    return router

}