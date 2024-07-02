import { IDependencies } from "./IDependencies";
import { ICreatePaymentUseCase, ICreateSessionUseCase, IGetAllPaymentsUseCase, IGetPaymentSessionByIdUseCase, IUpdatePaymentUseCase } from "@/domain/IUseCases";

export interface IUseCases {
    createPaymentUseCase: (dependencies: IDependencies) => ICreatePaymentUseCase;
    updatePaymentUseCase: (dependencies: IDependencies) => IUpdatePaymentUseCase;
    createSessionUseCase: (dependencies: IDependencies) => ICreateSessionUseCase;
    getPaymentSessionByIdUseCase: (dependencies: IDependencies) => IGetPaymentSessionByIdUseCase;
    getAllPaymentsUseCase: (dependencies: IDependencies) => IGetAllPaymentsUseCase;
}