import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { Router } from "express";
import {CurrentUser, RequireAuth} from '@eduverse/common'
import { getAllPayments } from "../database/mongo/repositories";

export const routes = (dependencies: IDependencies) => {
	const { createSession, getPaymentSession, createPayment, getAllPayments, createSubscriptionSession } =
		controllers(dependencies);

	const router = Router();

	//payment sessions
	router.route("/session").post(createSession);
	router.route("/session/:id").get(getPaymentSession)

	router.route('/subscription/session').post(createSubscriptionSession)

	//payments
	router.route('/').post(createPayment)
					.get(getAllPayments)



	return router;
};
