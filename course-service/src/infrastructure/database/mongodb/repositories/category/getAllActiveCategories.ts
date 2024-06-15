import { Category } from "../../models/CategoryModel"

export const getAllActiveCategories = async () => {
    try {
        const categories = await Category.find({status: 'active'})
        

        return categories

    } catch (error: any) {
        throw new Error(error?.message);
        
    }
}