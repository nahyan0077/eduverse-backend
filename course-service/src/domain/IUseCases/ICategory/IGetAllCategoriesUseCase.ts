import { CategoryEntity } from "@/domain/entities";

export interface IGetAllCategoriesUseCase {
    execute(): Promise < CategoryEntity[] | null >
}