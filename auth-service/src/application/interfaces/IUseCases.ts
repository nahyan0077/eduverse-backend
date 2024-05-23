import { ICheckExistingUserNameUseCase, ICreateUser, IFindUserByEmailUseCase } from "@/domain/IUseCases";
import { IVerifyOtpUseCase } from "@/domain/IUseCases/IVerifyOtpUseCase";

export interface IUseCases {
    findUserByEmailUseCase: (dependancies: any) => IFindUserByEmailUseCase
    createUserUseCase: (depenedancies: any) => ICreateUser
    checkExistingUserNameUseCase: (dependancies: any) => ICheckExistingUserNameUseCase
    verifyOtpUseCase:(dependancies: any) => IVerifyOtpUseCase
}