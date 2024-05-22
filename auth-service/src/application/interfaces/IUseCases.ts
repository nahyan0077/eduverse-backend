import { ICheckExistingUserNameUseCase, ICreateUser, IFindUserByEmailUseCase, IUpdateOtpUseCase } from "@/domain/IUseCases";

export interface IUseCases {
    findUserByEmailUseCase: (dependancies: any) => IFindUserByEmailUseCase
    createUserUseCase: (depenedancies: any) => ICreateUser
    checkExistingUserNameUseCase: (dependancies: any) => ICheckExistingUserNameUseCase
    updateOtpUseCase: (dependancies: any) => IUpdateOtpUseCase
}