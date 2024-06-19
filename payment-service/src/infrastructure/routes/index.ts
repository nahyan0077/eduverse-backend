import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { Router } from "express";
import {CurrentUser, RequireAuth} from '@eduverse/common'

export const routes = (dependencies: IDependencies) => {
	const { createSession, getPaymentSession, createPayment } =
		controllers(dependencies);

	const router = Router();

	router.route("/session").post(createSession);

	router.route("/session/:id").get(getPaymentSession)

	router.route('/').post(CurrentUser, RequireAuth,createPayment);
        

	return router;
};
