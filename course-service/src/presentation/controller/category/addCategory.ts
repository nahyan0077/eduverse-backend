import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const addCategoryController = (dependencies: IDependencies) => {
	const {
		useCases: { addCategoryUseCase },
	} = dependencies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = await addCategoryUseCase(dependencies).execute(req.body);

			if (!result) {
				throw new Error("Category creation failed");
			}

			res.status(200).json({
				success: true,
				data: result,
				message: "Category created!",
			});
		} catch (error: any) {
			next(error);
		}
	};
};
