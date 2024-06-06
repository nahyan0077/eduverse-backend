import { IDependencies } from "@/application/interfaces/IDependencies";
import {
	addCategoryController,
	editCategoryContorller,
	getAllCategoriesController,
} from "./category";

export const controller = (dependancies: IDependencies) => {
	return {
		addCategory: addCategoryController(dependancies),
		getAllCategories: getAllCategoriesController(dependancies),
		editCategory: editCategoryContorller(dependancies),
	};
};
