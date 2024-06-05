import { IAddCategoryUseCase } from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";


export interface IUseCases {
    addCategoryUseCase: (dependencies: IDependencies) => IAddCategoryUseCase
}

