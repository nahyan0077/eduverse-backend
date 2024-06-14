import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { Router } from "express";
// import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";
import {jwtMiddleware, CurrentUser, RequireAuth} from '@eduverse/common'

export const userRoutes = (dependencies: IDependencies) => {
	const {
		getAllInstructors,
		getAllStudents,
		blockUnblockUser,
		verifyInstructor,
		rejectInstructor,
		updateUser
	} = controllers(dependencies);

	const router = Router();

	router.route("/get-all-instructors").get(getAllInstructors);

	router.route("/get-all-students").get(jwtMiddleware,getAllStudents);

	router.route("/admin-block-unblock").patch(jwtMiddleware,blockUnblockUser);

	router.route("/verify-instructor").patch(jwtMiddleware,verifyInstructor);

	router.route("/reject-instructor").patch(jwtMiddleware,rejectInstructor);

	router.route("/profile").put(CurrentUser, RequireAuth, updateUser)

	return router;
};
