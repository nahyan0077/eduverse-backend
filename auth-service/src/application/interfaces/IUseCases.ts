import {
	ICheckExistingUserNameUseCase,
	ICreateUser,
	IFindUserByEmailUseCase,
	IFindUserByIdUseCase,
	ILoginUserUseCase,
	IUpdatePasswordUseCase,
	IVerifyOtpUseCase,
} from "@/domain/IUseCases";

export interface IUseCases {
	findUserByEmailUseCase: (dependancies: any) => IFindUserByEmailUseCase;
	createUserUseCase: (depenedancies: any) => ICreateUser;
	checkExistingUserNameUseCase: (
		dependancies: any
	) => ICheckExistingUserNameUseCase;
	verifyOtpUseCase: (dependancies: any) => IVerifyOtpUseCase;
	loginUserUseCase: (dependancies: any) => ILoginUserUseCase;
	findUserByIdUseCase: (dependencies: any) => IFindUserByIdUseCase;
	updatePasswordUseCase: (depenedencies: any) => IUpdatePasswordUseCase;
}
