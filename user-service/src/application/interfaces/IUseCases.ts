import {  ICreateUser, IGetAllInstructorsUseCase, IGetAllStudentsUseCase } from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    getAllInstructorsUseCase: (dependencies: IDependencies) => IGetAllInstructorsUseCase
    getAllStudentsUseCase: (dependencies: IDependencies) => IGetAllStudentsUseCase
    createUserUseCase: (depenedancies: any) => ICreateUser
}