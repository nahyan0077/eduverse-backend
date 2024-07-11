import { ResultEntity } from "@/domain/entities";

export interface ICreateOrUpdateResultUseCase {
    execute(data: ResultEntity): Promise<ResultEntity | null>;
}