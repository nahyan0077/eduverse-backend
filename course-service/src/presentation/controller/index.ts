import { IDependencies } from "@/application/interfaces/IDependencies";
import {
	addCategoryController,
	editCategoryContorller,
	getAllCategoriesController,
} from "./category";
import {
	createCourseController,
	getAllActiveCoursesController,
	getAllCourseController,
	updateCourseController,
} from "./course";

export const controller = (dependancies: IDependencies) => {
	return {
		addCategory: addCategoryController(dependancies),
		getAllCategories: getAllCategoriesController(dependancies),
		editCategory: editCategoryContorller(dependancies),
		createCourse: createCourseController(dependancies),
		getAllCourse: getAllCourseController(dependancies),
		updateCourse: updateCourseController(dependancies),
		getAllActive: getAllActiveCoursesController(dependancies),
	};
};
