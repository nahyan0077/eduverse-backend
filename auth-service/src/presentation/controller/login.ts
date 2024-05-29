import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
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

			const accessToken = generateAccessToken({
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!
            });

            const refreshToken = generateRefreshToken({
                _id: String(result?._id),
                email: result?.email!,
                role: result?.role!
            });

            res.cookie("access_token", accessToken, {
                httpOnly: true
            });

            res.cookie("refresh_token", refreshToken, {
                httpOnly: true
            });

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
