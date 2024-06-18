import { Category } from "../../models/CategoryModel"

export const getAllActiveCategories = async () => {
    try {
        const categories = await Category.find({status: 'active'})
        console.log(categories,"get active cat");
        

        return categories

    } catch (error: any) {
        throw new Error(error?.message);
        
    }
}