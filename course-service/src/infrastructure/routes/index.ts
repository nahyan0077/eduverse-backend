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
		getAllActiveCourse,
		getAllActiveCategory,
		createEnrollment,
		getEnrollmentByUserId,
		getCourseById,
		getEnrollmentById,
		updateLessonProgress,
		searchCourse,
		createReview,
		getAllReviews,
		getStudentsEnrolledByInstructor
	} = controller(dependancies);

	//course------------------------->
	router
		.route("/")
		.get(CurrentUser, getAllCourse)
		.post(CurrentUser, requireInstructor, createCourse)
		.put(CurrentUser, RequireAuth, updateCourse);

	router.route("/enrolled/:id").get(CurrentUser,RequireAuth , getCourseById);

	router.route('/search').get(searchCourse)

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
	router.route("/enrollment/update").post(CurrentUser, RequireAuth, updateLessonProgress)
	router.route("/enrollment/student/:instructorId").get(CurrentUser, requireInstructor, getStudentsEnrolledByInstructor)


	//create review----------------->
	router.route('/review')
			.post(CurrentUser,RequireAuth,createReview)
			.get(getAllReviews)


	return router;
};
