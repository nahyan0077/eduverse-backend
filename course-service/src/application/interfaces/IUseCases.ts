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
	IGetCoursesByInstructorId,
	IGetEnrollmentByIdUseCase,
	IGetEnrollmentByUserIdUseCase,
	IGetInstructorsByStudentrUseCase,
	IGetStudentsEnrolledByInstructorUseCase,
	ISearchCourseUseCase,
	IUpdateCourseUseCase,
	IUpdateLessonProgressUseCase,
} from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";
import { ICreateAssessmentUseCase, IGetAllAssessmentsUseCase, IGetAssessmentByIdUseCase, IGetAssessmentsByCourseIdUseCase, IGetAssessmentsByInstructorIdUseCase, IUpdateAssessmentUseCase } from "@/domain/IUseCases/IAssessment";




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
	getCoursesByInstructorIdUseCase: (depenedencies: IDependencies) => IGetCoursesByInstructorId

	//enrollment 
	createEnrollmentUseCase: (dependencies: IDependencies) => ICreateEnrollmentUseCase
	getEnrollmentByUserIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByUserIdUseCase;
    getEnrollmentByIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByIdUseCase;
	updateLessonProgressUseCase: (dependencies: IDependencies) => IUpdateLessonProgressUseCase
	getStudentsEnrolledByInstructorUseCase: (dependencies: IDependencies) =>  IGetStudentsEnrolledByInstructorUseCase
	getInstructorsByStudentUseCase: (dependencies: IDependencies) =>  IGetInstructorsByStudentrUseCase

	//review
	createReviewUseCase: (dependencies: IDependencies) => ICreateReviewUseCase
	getAllReviewsUseCase: (dependencies: IDependencies) => IGetAllReviewsUseCase


	//assessments
	createAssessmentUseCase: (dependencies: IDependencies) => ICreateAssessmentUseCase;
    updateAssessmentUseCase: (dependencies: IDependencies) => IUpdateAssessmentUseCase;
    getAllAssessmentsUseCase: (dependencies: IDependencies) => IGetAllAssessmentsUseCase;
	getAssessmentByIdUseCase: (dependencies: IDependencies) => IGetAssessmentByIdUseCase;
	getAssessmentsByCourseIdUseCase: (dependencies: IDependencies) => IGetAssessmentsByCourseIdUseCase;
	getAssessmentsByInstructorIdUseCase: (dependencies: IDependencies) => IGetAssessmentsByInstructorIdUseCase;


}
