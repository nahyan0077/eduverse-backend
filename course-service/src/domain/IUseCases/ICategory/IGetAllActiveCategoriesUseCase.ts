import { CategoryEntity } from "@/domain/entities";

export interface IGetAllActiveCategoriesUseCase {
    execute(): Promise < CategoryEntity[] | null >
}