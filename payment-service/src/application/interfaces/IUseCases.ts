import { PaymentEntity } from "@/domain/entities";
import { IDependencies } from "./IDependencies";
import { ICreatePaymentUseCase, ICreateSessionUseCase, IGetPaymentSessionByIdUseCase, IUpdatePaymentUseCase } from "@/domain/IUseCases";

export interface IUseCases {
    createPaymentUseCase: (dependencies: IDependencies) => ICreatePaymentUseCase;
    updatePaymentUseCase: (dependencies: IDependencies) => IUpdatePaymentUseCase;
    createSessionUseCase: (dependencies: IDependencies) => ICreateSessionUseCase;
    getPaymentSessionByIdUseCase: (dependencies: IDependencies) => IGetPaymentSessionByIdUseCase;
}