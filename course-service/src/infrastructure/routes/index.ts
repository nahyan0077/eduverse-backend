import { IDependencies } from "@/application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";
import { Router } from "express";
import { CurrentUser } from "@eduverse/common";
import { requireAdmin } from "../../_lib/common/middlewares/requireAdmin";
import { requireInstructor } from "../../_lib/common/middlewares/requireInsructor";
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";

export const routes = (dependancies: IDependencies) => {
	const router = Router();

	const {
		addCategory,
		getAllCategories,
		editCategory,
		createCourse,
		getAllCourse,
		updateCourse,
		getAllActive,
	} = controller(dependancies);

	
	router.route("/")
		.get(CurrentUser, requireAdmin, getAllCourse)
		.post(CurrentUser, requireInstructor, createCourse)
		.put(CurrentUser, requireInstructor, updateCourse);
	
	router.route("/category")
		.post(CurrentUser, requireAdmin,addCategory)
		.get(CurrentUser, requireAdmin, getAllCategories)
		.put(CurrentUser, requireAdmin, editCategory);

	router.route("/get-active-courses").get(getAllActive);

	return router;
};
