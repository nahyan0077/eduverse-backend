import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models/CategoryModel";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

export const addCategory = async (data: CategoryEntity) => {
	try {
        console.log(data,"add cat data");

		const normalisedName = data.categoryName.trim().toLowerCase()

		const existingCategory = await Category.findOne({categoryName: normalisedName})

		if (existingCategory) {
			throw ErrorResponse.conflict("This Category Name already exitst..!")
		}

		const newData = {...data, categoryName:normalisedName}
        
		const created = await Category.create(newData);
		if (!created) {
			throw new Error("Category creation failed!");
		}

		return created;
	} catch (error: any) {
		throw new Error(error?.message);
	}
};
