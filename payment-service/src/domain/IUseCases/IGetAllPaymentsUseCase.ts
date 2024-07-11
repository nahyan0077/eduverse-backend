import { PaymentEntity } from "../entities";

export interface IGetAllPaymentsUseCase {
    execute: () =>Promise < PaymentEntity []> | []
}