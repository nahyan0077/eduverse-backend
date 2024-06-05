import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models/CategoryModel";

export const addCategory = async (data: CategoryEntity) => {
	try {
        console.log(data,"add cat data");
        
		const created = await Category.create(data);
		if (!created) {
			throw new Error("Category creation failed!");
		}

		return created;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
