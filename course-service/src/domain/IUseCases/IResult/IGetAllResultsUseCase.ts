import { ResultEntity } from "@/domain/entities";

export interface IGetAllResultsUseCase {
    execute(): Promise<ResultEntity[] | null>;
}