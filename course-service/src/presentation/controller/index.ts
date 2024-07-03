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
	getCoursesByInstructorIdController,
	searchCourseController,
	updateCourseController,
} from "./course";
import {
	createEnrollmentController,
	getEnrollmentByIdController,
	getEnrollmentByUserIdController,
	getInstructorsByStudentController,
	getStudentsEnrolledByInstructorController,
	updateLessonProgressController,
} from "./enrollment";
import { createReviewController } from "./review";
import { getAllReviewsController } from "./review/getAllReviewsController";

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
		getCoursesByInstructorId: getCoursesByInstructorIdController(dependancies),

		//enrollment
		createEnrollment: createEnrollmentController(dependancies),
		getEnrollmentByUserId: getEnrollmentByUserIdController(dependancies),
		getEnrollmentById: getEnrollmentByIdController(dependancies),
		updateLessonProgress: updateLessonProgressController(dependancies),
		getStudentsEnrolledByInstructor: getStudentsEnrolledByInstructorController(dependancies),
		getInstructorsByStudent: getInstructorsByStudentController(dependancies),

		//review
		createReview: createReviewController(dependancies),
		getAllReviews: getAllReviewsController(dependancies)

		//assessments
		
	};
};
