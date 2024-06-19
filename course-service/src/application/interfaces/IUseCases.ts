import {
	IAddCategoryUseCase,
	ICreateCourseUseCase,
	IEditCategoryUseCase,
	IGetAllActiveCategoriesUseCase,
	IGetAllActiveCoursesUseCases,
	IGetAllCategoriesUseCase,
	IGetAllCourseUseCase,
	IUpdateCourseUseCase,
} from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";
import { ICreateEnrollmentUseCase } from "@/domain/IUseCases/IEnrollment";
import { IGetEnrollmentByIdUseCase, IGetEnrollmentByUserIdUseCase } from "../useCases";

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

	//enrollment 
	createEnrollmentUseCase: (dependencies: IDependencies) => ICreateEnrollmentUseCase
	getEnrollmentByUserIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByUserIdUseCase;
    getEnrollmentByIdUseCase: (dependencies: IDependencies) => IGetEnrollmentByIdUseCase;
}
