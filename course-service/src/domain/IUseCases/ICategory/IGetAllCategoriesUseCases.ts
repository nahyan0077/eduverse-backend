import { CategoryEntity } from "@/domain/entities";

export interface IGetAllCategoriesUseCases {
    execute(): Promise < CategoryEntity[] | null >
}