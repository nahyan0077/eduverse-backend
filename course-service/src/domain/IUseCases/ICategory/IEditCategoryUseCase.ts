import { CategoryEntity } from "@/domain/entities";

export interface IEditCategoryUseCase {
    execute(data: CategoryEntity): Promise <CategoryEntity | null>
}