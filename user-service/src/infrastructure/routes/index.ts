import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { Router } from "express";
// import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";
import { jwtMiddleware, CurrentUser, RequireAuth } from "@eduverse/common";
import { requireAdmin } from "../../_lib/common/middlewares/requireAdmin";



export const userRoutes = (dependencies: IDependencies) => {
	const {
		getAllInstructors,
		getAllStudents,
		blockUnblockUser,
		verifyInstructor,
		rejectInstructor,
		updateUser,
	} = controllers(dependencies);

	const router = Router();

	router.route("/get-all-instructors").get(getAllInstructors);

	router.route("/get-all-students").get(jwtMiddleware, getAllStudents);

	router.route("/admin-block-unblock").patch(CurrentUser, requireAdmin, blockUnblockUser);

	router
		.route("/verify-instructor")
		.patch(CurrentUser, requireAdmin, verifyInstructor);

	router
		.route("/reject-instructor")
		.patch(CurrentUser, requireAdmin, rejectInstructor);

	router.route("/profile").put(CurrentUser, RequireAuth, updateUser);

	return router;
};
