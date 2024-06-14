import { IDependencies } from "@/application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";
import { Router } from "express";
import { CurrentUser, RequireAuth } from "@eduverse/common";
import { requireAdmin } from "../../_lib/common/middlewares/requireAdmin";
import { requireInstructor } from "../../_lib/common/middlewares/requireInsructor";

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

	router.route("/add-category").post(addCategory);

	router.route("/get-all-categories").get(getAllCategories);

	router.route("/edit-category").put(editCategory);

	router.route("/")
		.get(CurrentUser, requireAdmin, getAllCourse)
		.post(CurrentUser, requireInstructor, createCourse)
		.put(CurrentUser, requireInstructor, updateCourse);

	router.route("/get-all-active").get(getAllActive);

	return router;
};
