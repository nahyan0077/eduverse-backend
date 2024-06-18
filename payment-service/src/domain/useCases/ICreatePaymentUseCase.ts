import { PaymentEntity } from "../entities";

export interface ICreatePaymentUseCase {
    execute(data: PaymentEntity): Promise<PaymentEntity | null>;
}