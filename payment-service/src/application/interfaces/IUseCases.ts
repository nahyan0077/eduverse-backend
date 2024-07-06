import { IDependencies } from "./IDependencies";
import {
	ICreatePaymentUseCase,
	ICreateSessionUseCase,
	IGetAllPaymentsUseCase,
	IGetPaymentSessionByIdUseCase,
	ICreateSubscriptionSessionUseCase,
	IUpdatePaymentUseCase,
    ICreateSubscriptionPaymentUseCase,
} from "@/domain/IUseCases";

export interface IUseCases {
	createPaymentUseCase: (dependencies: IDependencies) => ICreatePaymentUseCase;
	updatePaymentUseCase: (dependencies: IDependencies) => IUpdatePaymentUseCase;
	createSessionUseCase: (dependencies: IDependencies) => ICreateSessionUseCase;
	getPaymentSessionByIdUseCase: (dependencies: IDependencies) => IGetPaymentSessionByIdUseCase;
	getAllPaymentsUseCase: (dependencies: IDependencies) => IGetAllPaymentsUseCase;
	createSubscriptionSessionUseCase: (dependencies: IDependencies) => ICreateSubscriptionSessionUseCase;
    createSubscriptionPaymentUseCase: (dependencies: IDependencies) => ICreateSubscriptionPaymentUseCase;
}
