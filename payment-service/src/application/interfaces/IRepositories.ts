import { PaymentEntity, SessionEntity } from "@/domain/entities";

export interface IRepositories {
    createPayment: (data: PaymentEntity) => Promise<PaymentEntity | null>;
    updatePayment: (data: PaymentEntity) => Promise<PaymentEntity | null>;
    createSession: (data: SessionEntity) => Promise<SessionEntity | null>;
    getPaymentSessionById: (id: string) => Promise<SessionEntity | null>;
}