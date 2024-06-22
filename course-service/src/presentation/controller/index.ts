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
	getCourseByIdController,
	searchCourseController,
	updateCourseController,
} from "./course";
import {
	createEnrollmentController,
	getEnrollmentByIdController,
	getEnrollmentByUserIdController,
	updateLessonProgressController,
} from "./enrollment";

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
		getAllActiveCourse: getAllActiveCoursesController(dependancies),
		getCourseById: getCourseByIdController(dependancies),
		searchCourse: searchCourseController(dependancies),

		//enrollment
		createEnrollment: createEnrollmentController(dependancies),
		getEnrollmentByUserId: getEnrollmentByUserIdController(dependancies),
		getEnrollmentById: getEnrollmentByIdController(dependancies),
		updateLessonProgress: updateLessonProgressController(dependancies)
	};
};
