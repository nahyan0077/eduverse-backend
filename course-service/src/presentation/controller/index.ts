import { IDependencies } from "@/application/interfaces/IDependencies";
import { addCategoryController } from "./category/addCategory";

export const controller = (dependancies: IDependencies) => {
    return {
        addCategory: addCategoryController(dependancies)
    }
}