import { IDependancies } from "@/application/interfaces/IDependancies";
import { Request, Response, NextFunction } from "express";

export const logoutController = (dependancies: IDependancies) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			res.cookie("access_token", "", { maxAge: 1 });
			res.cookie("refresh_token", "", { maxAge: 1 });
			res.status(204).json({});
		} catch (error: any) {
			next(error);
		}
	};
};
