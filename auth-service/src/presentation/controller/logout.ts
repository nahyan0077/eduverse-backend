import { IDependancies } from "@/application/interfaces/IDependancies";
import { Request, Response, NextFunction } from "express";

export const logoutController = (dependancies: IDependancies) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {

			const cookieOptions : any = {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 0
            };

			res.cookie("access_token", "", cookieOptions);
			res.cookie("refresh_token", "", cookieOptions);
			res.status(204).json({});
		} catch (error: any) {
			next(error);
		}
	};
};
