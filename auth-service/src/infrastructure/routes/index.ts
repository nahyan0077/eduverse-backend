import { Router } from "express";
import { IDependancies } from "@/application/interfaces/IDependancies";
import { controllers } from "../../presentation/controller";
import {jwtMiddleware} from '@eduverse/common'

export const routes = (dependancies: IDependancies) => {
	const {
		signup,
		findUserByEmail,
		checkExistingUserName,
		verifyOtp,
		login,
		googleAuth,
		getUser,
		forgotPasswordMail,
		updatePassword,
		logout,
	} = controllers(dependancies);

	const router = Router();

	router.route("/signup").post(signup);

	router.route("/login").post(login);

	router.route("/available-email/:email").get(findUserByEmail);

	router.route("/available-username/:username").get(checkExistingUserName);

	router.route("/verify-otp").post(verifyOtp);

	router.route("/google-auth").post(googleAuth);

	router.route("/getUser").get(jwtMiddleware,getUser);

	router.route('/forgot-password-mail').post(forgotPasswordMail)

	router.route('/update-password').post(updatePassword)

	router.route("/logout").delete(jwtMiddleware,logout);

	return router;
};
