import { ICheckExistingUserNameUseCase, ICreateUser, IFindUserByEmailUseCase } from "@/domain/IUseCases";

export interface IUseCases {
    findUserByEmailUseCase: (dependancies: any) => IFindUserByEmailUseCase
    createUserUseCase: (depenedancies: any) => ICreateUser
    checkExistingUserNameUseCase: (dependancies: any) => ICheckExistingUserNameUseCase
}