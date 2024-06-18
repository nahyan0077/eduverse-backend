import { PaymentEntity } from "../entities";

export interface IUpdatePaymentUseCase {
    execute(data: PaymentEntity): Promise<PaymentEntity | null>;
}