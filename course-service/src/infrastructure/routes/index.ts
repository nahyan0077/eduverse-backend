import { IDependencies } from "@/application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";
import { Router } from "express";

export const routes = (dependancies: IDependencies) => {
	const router = Router();

	const { addCategory, getAllCategories } = controller(dependancies);

	router.route("/add-category").post(addCategory);

	router.route("/get-all-categories").get(getAllCategories);

	return router;
};
