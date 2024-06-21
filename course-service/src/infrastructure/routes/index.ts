import { IDependencies } from "@/application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";
import { Router } from "express";
import { CurrentUser, RequireAuth } from "@eduverse/common";
import { requireAdmin } from "../../_lib/common/middlewares/requireAdmin";
import { requireInstructor } from "../../_lib/common/middlewares/requireInsructor";
import { getEnrollmentById } from "../database/mongodb/repositories";

export const routes = (dependancies: IDependencies) => {
	const router = Router();

	const {
		addCategory,
		getAllCategories,
		editCategory,
		createCourse,
		getAllCourse,
		updateCourse,
		getAllActiveCourse,
		getAllActiveCategory,
		createEnrollment,
		getEnrollmentByUserId,
		getCourseById,
	} = controller(dependancies);

	//course------------------------->
	router
		.route("/")
		.get(CurrentUser, getAllCourse)
		.post(CurrentUser, requireInstructor, createCourse)
		.put(CurrentUser, requireInstructor, updateCourse);

	router.route("/enrolled/:id").get(CurrentUser,RequireAuth , getCourseById);

	//category----------------------->
	router
		.route("/category")
		.post(CurrentUser, requireAdmin, addCategory)
		.get(CurrentUser, requireAdmin, getAllCategories)
		.put(CurrentUser, requireAdmin, editCategory);

	router.route("/get-active-courses").get(getAllActiveCourse);

	router.route("/get-active-category").get(getAllActiveCategory);

	//enrollment---------------------->
	router.route("/enrollment").post(CurrentUser, RequireAuth, createEnrollment);
	router.route("/enrollment/user/:userId").get(CurrentUser, RequireAuth, getEnrollmentByUserId);
	router.route("/enrollment/:id").get(CurrentUser, RequireAuth, getEnrollmentById);


	return router;
};
