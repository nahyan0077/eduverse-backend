import { IDependencies } from "@/application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";
import { Router } from "express";
import { jwtMiddleware } from "@/_lib/common/middlewares/jwtMiddleware";

export const routes = (dependancies: IDependencies) => {
	const router = Router();

	const {
		addCategory,
		getAllCategories,
		editCategory,
		createCourse,
		getAllCourse,
		updateCourse,
		getAllActive
	} = controller(dependancies);

	router.route("/add-category").post(addCategory);

	router.route("/get-all-categories").get(getAllCategories);

	router.route("/edit-category").put(editCategory);

	router.route("/create-course").post(createCourse);

	router.route("/get-all-courses").get(getAllCourse);

	router.route("/get-all-active").get(getAllActive)

	router.route("/update-course").put(updateCourse);

	return router;
};
