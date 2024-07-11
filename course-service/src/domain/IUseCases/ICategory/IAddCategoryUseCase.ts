import { CategoryEntity } from "../../entities";

export interface IAddCategoryUseCase {
	execute(data: CategoryEntity): Promise<CategoryEntity | null>;
}
