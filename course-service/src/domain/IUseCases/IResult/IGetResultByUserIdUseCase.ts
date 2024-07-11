import { ResultEntity } from "@/domain/entities";

export interface IGetResultByUserIdUseCase {
    execute(userId: string): Promise<ResultEntity[] | null>;
}