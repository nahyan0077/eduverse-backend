import { comparePassword } from "../../_lib/http/bcrypt/comparePassword";
import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const loginController = (dependancies: IDependancies) => {
	const {
		useCases: { loginUserUseCase },
	} = dependancies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email, password } = req.body;

			const result = await loginUserUseCase(dependancies).execute(email, password);
			console.log(result,"login confirm");
			
			if (!result) {
				return res
					.status(200)
					.json({ success: false, message: "User doesn't exist or incorrect password" });
			}

			return res.status(200).json({
				success: true,
				data: result,
				message: "User logged in successfully",
			});
		} catch (error: any) {
			console.log("Login controller error: ", error);
            next(error)
		}
	};
};
