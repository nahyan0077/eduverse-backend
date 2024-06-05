import { Category } from "../../models/CategoryModel"

export const getAllCategories = async () => {
    try {
        const categories = await Category.find()

        return categories

    } catch (error: any) {
        throw new Error(error?.message);
        
    }
}