import { IAddCategoryUseCase, ICreateCourseUseCase, IEditCategoryUseCase, IGetAllCategoriesUseCases } from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";



export interface IUseCases {

    //category
    addCategoryUseCase: (dependencies: IDependencies) => IAddCategoryUseCase
    getAllCategoriesUseCase: (dependancies: IDependencies) => IGetAllCategoriesUseCases
    editCategoryUseCase: (dependencies: IDependencies) => IEditCategoryUseCase

    //course
    createCourseUseCase: (dependecies: IDependencies) => ICreateCourseUseCase
 }

