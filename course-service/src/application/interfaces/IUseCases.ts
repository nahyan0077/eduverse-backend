import { IAddCategoryUseCase, IEditCategoryUseCase, IGetAllCategoriesUseCases } from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";


export interface IUseCases {
    addCategoryUseCase: (dependencies: IDependencies) => IAddCategoryUseCase
    getAllCategoriesUseCase: (dependancies: IDependencies) => IGetAllCategoriesUseCases
    editCategoryUseCase: (dependencies: IDependencies) => IEditCategoryUseCase
 }

