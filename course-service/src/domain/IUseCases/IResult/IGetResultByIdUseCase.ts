import { ResultEntity } from "@/domain/entities";

export interface IGetResultByIdUseCase {
    execute(id: string): Promise<ResultEntity | null>;
}