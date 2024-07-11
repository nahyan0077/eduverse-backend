import { SessionEntity } from "../entities";

export interface ICreateSessionUseCase {
    execute(data: SessionEntity): Promise<SessionEntity | null>;
}