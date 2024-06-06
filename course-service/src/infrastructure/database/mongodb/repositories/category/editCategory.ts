import { CategoryEntity } from "@/domain/entities";
import { Category } from "../../models/CategoryModel";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

export const editCategory = async (
	data: CategoryEntity
): Promise<CategoryEntity | null> => {
	try {
		
		const normalisedName = data.categoryName.trim().toLowerCase();

		const duplicateCategory = await Category.findOne({
			categoryName: normalisedName,
			_id: { $ne: data._id },
		});

		if (duplicateCategory) {
			throw ErrorResponse.conflict("This category already exists...!");
		}

		const updateCategory = await Category.findByIdAndUpdate(
			data._id,
			{ categoryName: data.categoryName, status: data.status },
			{ new: true }
		);

		return updateCategory;
	} catch (error: any) {
		throw ErrorResponse.internalError(
			error.message || "An unexpected error occurred"
		);
	}
};
