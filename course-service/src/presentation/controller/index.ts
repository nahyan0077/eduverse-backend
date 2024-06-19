import { IDependencies } from "@/application/interfaces/IDependencies";
import {
	addCategoryController,
	editCategoryContorller,
	getAllActiveCategoriesController,
	getAllCategoriesController,
} from "./category";
import {
	createCourseController,
	getAllActiveCoursesController,
	getAllCourseController,
	updateCourseController,
} from "./course";
import { createEnrollmentController, getEnrollmentByUserIdController } from "./enrollment";

export const controller = (dependancies: IDependencies) => {
	return {

		//category
		addCategory: addCategoryController(dependancies),
		getAllCategories: getAllCategoriesController(dependancies),
		editCategory: editCategoryContorller(dependancies),
		getAllActiveCategory: getAllActiveCategoriesController(dependancies),


		//courses
		createCourse: createCourseController(dependancies),
		getAllCourse: getAllCourseController(dependancies),
		updateCourse: updateCourseController(dependancies),
		getAllActiveCourse : getAllActiveCoursesController(dependancies),

		//enrollment
		createEnrollment: createEnrollmentController(dependancies),
		getEnrollment: getEnrollmentByUserIdController(dependancies),
	};
};
