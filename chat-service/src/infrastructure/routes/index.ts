import { Router } from "express";
import { CurrentUser, RequireAuth } from "@eduverse/common";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";

export const routes = (dependancies: IDependencies) => {
    const { createChat } = controllers(dependancies)

	const router = Router();

    router.route('/').post(createChat)

    return router

}