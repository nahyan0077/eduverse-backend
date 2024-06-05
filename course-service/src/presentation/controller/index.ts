import { IDependencies } from "@/application/interfaces/IDependencies";
import { addCategoryController } from "./category/addCategory";
import { getAllCategoriesController } from "./category/getAllCategories";

export const controller = (dependancies: IDependencies) => {
    return {
        addCategory: addCategoryController(dependancies),
        getAllCategories: getAllCategoriesController(dependancies)
    }
}