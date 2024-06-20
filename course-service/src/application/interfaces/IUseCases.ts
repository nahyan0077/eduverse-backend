import {
	IAddCategoryUseCase,
	ICreateCourseUseCase,
	IEditCategoryUseCase,
	IGetAllActiveCategoriesUseCase,
	IGetAllActiveCoursesUseCases,
	IGetAllCategoriesUseCase,
	IGetAllCourseUseCase,
	IGetCourseByIdUseCase,
	IUpdateCourseUseCase,
} from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";
import { ICreateEnrollmentUseCase, IGetEnrollmentByIdUseCase, IGetEnrollmentByUserIdUseCase } from "@/domain/IUseCases/IEnrollment";


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

	//enrollment 
	createEnrollmentUseCase: (dependencies: IDependencies) => ICreateEnrollmentUseCase
	getEnrollmentByUserIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByUserIdUseCase;
    getEnrollmentByIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByIdUseCase;
}
