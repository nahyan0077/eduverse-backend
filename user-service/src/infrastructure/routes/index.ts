import { IDependencies } from "@/application/interfaces/IDependencies";
import { controllers } from "../../presentation/controllers";
import { Router } from "express";

export const userRoutes = (dependencies: IDependencies) => {
	const {
		getAllInstructors,
		getAllStudents,
		blockUnblockUser,
		verifyInstructor,
		rejectInstructor,
	} = controllers(dependencies);

	const router = Router();

	router.route("/get-all-instructors").get(getAllInstructors);
	router.route("/get-all-students").get(getAllStudents);
	router.route("/admin-block-unblock").patch(blockUnblockUser);
	router.route("/verify-instructor").patch(verifyInstructor);
	router.route("/reject-instructor").patch(rejectInstructor);

	return router;
};
