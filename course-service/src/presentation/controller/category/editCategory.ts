import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const editCategoryContorller = (dependancies: IDependencies) => {
	const {
		useCases: { editCategoryUseCase },
	} = dependancies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = await editCategoryUseCase(dependancies).execute(req.body);

			if (!result) {
				throw new Error("Category updation failed");
			}

			res.status(200).json({
				success: true,
				data: result,
				message: "Category updated!",
			});
		} catch (error: any) {
            next(error)
        }
	};
};
