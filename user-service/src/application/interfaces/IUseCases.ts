import {  IBlockUnblockUser, ICreateUser, IGetAllInstructorsUseCase, IGetAllStudentsUseCase, IRejectInstructorUseCase, IVerifyInstructorUseCase } from "@/domain/IUseCases";
import { IDependencies } from "./IDependencies";

export interface IUseCases {
    getAllInstructorsUseCase: (dependencies: IDependencies) => IGetAllInstructorsUseCase
    getAllStudentsUseCase: (dependencies: IDependencies) => IGetAllStudentsUseCase
    createUserUseCase: (depenedancies: any) => ICreateUser
    blockUnblockUserUseCase: (dependencies: any) => IBlockUnblockUser
    verifyInstructorUseCase: (dependencies: any) => IVerifyInstructorUseCase
    rejectInstructorUseCase: (dependencies: any) => IRejectInstructorUseCase
}