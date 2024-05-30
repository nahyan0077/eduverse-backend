import { IDependancies } from "@/application/interfaces/IDependancies";
import { Request, Response, NextFunction } from "express";

export const getUserController = (dependancies: IDependancies) => {
	const {
		useCases: { findUserByIdUseCase },
	} = dependancies;

	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			
			if (!req.user) {
				throw new Error("Authentication required: No user provided.");
			}

			const response = await findUserByIdUseCase(dependancies).execute(
				req.user._id
			);
			if (!response) {
				throw new Error("user not found!!");
			}

			res.status(200).json({
				success: true,
				data: response,
				message: "User exist!",
			});
		} catch (error: any) {
			next(error);
		}
	};
};
