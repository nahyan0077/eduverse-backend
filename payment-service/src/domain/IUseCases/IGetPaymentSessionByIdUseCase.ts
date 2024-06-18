import { SessionEntity } from "../entities";

export interface IGetPaymentSessionByIdUseCase {
    execute(id: string): Promise<SessionEntity | null>;
}