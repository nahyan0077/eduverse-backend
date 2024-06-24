import {
	IAddCategoryUseCase,
	ICreateCourseUseCase,
	ICreateEnrollmentUseCase,
	ICreateReviewUseCase,
	IEditCategoryUseCase,
	IGetAllActiveCategoriesUseCase,
	IGetAllActiveCoursesUseCases,
	IGetAllCategoriesUseCase,
	IGetAllCourseUseCase,
	IGetAllReviewsUseCase,
	IGetCourseByIdUseCase,
	IGetEnrollmentByIdUseCase,
	IGetEnrollmentByUserIdUseCase,
	ISearchCourseUseCase,
	IUpdateCourseUseCase,
	IUpdateLessonProgressUseCase,
} from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";
// import { 
// 	ICreateEnrollmentUseCase, 
// 	IGetEnrollmentByIdUseCase, 
// 	IGetEnrollmentByUserIdUseCase, 
// 	IUpdateLessonProgressUseCase 
// } from "@/domain/IUseCases/IEnrollment";


export interface IUseCases {
	//category
	addCategoryUseCase: (dependencies: IDependencies) => IAddCategoryUseCase;
	getAllCategoriesUseCase: (dependancies: IDependencies) => IGetAllCategoriesUseCase;
	editCategoryUseCase: (dependencies: IDependencies) => IEditCategoryUseCase;
	getAllActiveCategoriesUseCase: (dependancies: IDependencies) => IGetAllActiveCategoriesUseCase;

	//course
	createCourseUseCase: (dependecies: IDependencies) => ICreateCourseUseCase;
	getAllCourseUseCase: (depenedencies: IDependencies) => IGetAllCourseUseCase;
	getAllActiveCoursesUseCase: (dependencies: IDependencies) => IGetAllActiveCoursesUseCases;
	updateCourseUseCase: (dependencies: IDependencies) => IUpdateCourseUseCase;
	getCourseByIdUseCase: (dependencies: IDependencies) => IGetCourseByIdUseCase
	searchCourseUseCase: (dependencies: IDependencies) => ISearchCourseUseCase

	//enrollment 
	createEnrollmentUseCase: (dependencies: IDependencies) => ICreateEnrollmentUseCase
	getEnrollmentByUserIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByUserIdUseCase;
    getEnrollmentByIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByIdUseCase;
	updateLessonProgressUseCase: (dependencies: IDependencies) => IUpdateLessonProgressUseCase

	//review
	createReviewUseCase: (dependencies: IDependencies) => ICreateReviewUseCase
	getAllReviewsUseCase: (dependencies: IDependencies) => IGetAllReviewsUseCase
}
