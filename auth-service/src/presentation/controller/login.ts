import { updateLoginStreak } from "../../infrastructure/database/mongodb/repositories/updateLoginStreak";
import ErrorResponse from "../../_lib/common/error/errorResponse";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";
import { loginSchema } from "../../_lib/validation";

export const loginController = (dependancies: IDependancies) => {
	const {
		useCases: { loginUserUseCase },
	} = dependancies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email, password } = req.body;

			//login validation
			const {error, value} = loginSchema.validate(req.body)

			console.log(error,"backend validat");
			console.log(value,"val backend validat");
			
			if (error) {
				return res.status(400).json({ errors: error.message });
			}

			const result = await loginUserUseCase(dependancies).execute(
				value.email,
				value.password
			);

			const userId = result?._id?.toString() as string;

			//updating login streak
			if (result?.role == "student") {
				await updateLoginStreak(userId);
			}

			if (!result) {
				return res
					.status(200)
					.json({
						success: false,
						message: "User doesn't exist or incorrect password",
					});
			}

			if (result.isBlocked) {
				throw ErrorResponse.unauthorized("Eduverse team blocked your account");
			}

			const accessToken = generateAccessToken({
				_id: String(result?._id),
				email: result?.email!,
				role: result?.role!,
			});

			const refreshToken = generateRefreshToken({
				_id: String(result?._id),
				email: result?.email!,
				role: result?.role!,
			});

			res.cookie("access_token", accessToken, {
				httpOnly: true,
			});

			res.cookie("refresh_token", refreshToken, {
				httpOnly: true,
			});

			return res.status(200).json({
				success: true,
				data: result,
				message: "User logged in successfully",
			});
		} catch (error: any) {
			console.log("Login controller error: ", error);
			next(error);
		}
	};
};
