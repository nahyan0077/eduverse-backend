import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createReviewController = (dependancies: IDependencies) => {
	const {
		useCases: { createReviewUseCase },
	} = dependancies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const created = await createReviewUseCase(dependancies).execute(req.body);

			if (!created) {
				return res.status(200).json({
					success: false,
					message: "Review creatioin failed",
				});
			}

			return res.status(200).json({
				success: true,
				message: "Review created",
			});

		} catch (error: any) {
            next(error)
        }
	};
};
