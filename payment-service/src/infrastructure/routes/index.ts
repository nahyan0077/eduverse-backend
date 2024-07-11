import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controller";
import { Router } from "express";
import {CurrentUser, RequireAuth} from '@eduverse/common'
import { getAllPayments } from "../database/mongo/repositories";

export const routes = (dependencies: IDependencies) => {
	const { createSession, getPaymentSession, createPayment, getAllPayments, createSubscriptionSession, createSubscriptionPayment } =
		controllers(dependencies);

	const router = Router();

	//payment sessions
	router.route("/session").post(CurrentUser, RequireAuth,createSession);
	router.route("/session/:id").get(CurrentUser, RequireAuth,getPaymentSession)

	router.route('/subscription/session').post(CurrentUser, RequireAuth,createSubscriptionSession)
	
	//payments
	router.route('/').post(CurrentUser, RequireAuth,createPayment)
					.get(CurrentUser, RequireAuth,getAllPayments)
	
	router.route('/subscription').post(CurrentUser, RequireAuth,createSubscriptionPayment)


	return router;
};
