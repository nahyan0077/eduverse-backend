import {  ICreateUser, IGetAllInstructorsUseCase } from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    getAllInstructorsUseCase: (dependencies: IDependencies) => IGetAllInstructorsUseCase
    createUserUseCase: (depenedancies: any) => ICreateUser
}