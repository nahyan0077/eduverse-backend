import { hashPassword } from "../../_lib/http/bcrypt";
import { verifyForgotPasswordToken } from "../../_lib/http/jwt";
import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const updatePasswordController = (dependencies: IDependancies) => {
	const {
		useCases: { updatePasswordUseCase },
	} = dependencies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { token, password } = req.body;

			const verified: any = await verifyForgotPasswordToken(token);
            
			if (!verified) {
				return res.status(200).json({
					success: false,
					data: {},
					message: "Token expired or use valid token..!",
				});
			}

			const hash = await hashPassword(password);

			const result = await updatePasswordUseCase(dependencies).execute(
				verified.email,
				hash
			);

			if (!result) {
				throw new Error("Password updation failed!");
			}

			res.status(200).json({
				success: true,
				data: result,
				message: "Password updated!",
			});
		} catch (error: any) {
			next(error);
		}
	};
};
