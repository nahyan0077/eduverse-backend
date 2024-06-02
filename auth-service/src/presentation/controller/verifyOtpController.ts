import { IDependancies } from "@/application/interfaces/IDependancies";
import { NextFunction, Request, Response } from "express";

export const verifyOtpController = (dependancies: IDependancies) => {
	const {
		useCases: { verifyOtpUseCase },
	} = dependancies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { otp, email } = req.body;

            console.log(otp,"otp reacher");

			const result = await verifyOtpUseCase(dependancies).execute(
				email,
				otp
			);

            console.log(result,"resutlo -->");
            

			if (!result) {
				return res
					.status(200)
					.json({ success: false, data: {}, message: "OTP doesnt match" });
			} else {
				return res
					.status(200)
					.json({
						success: true,
						data: {},
						message: "OTP verified successfully",
					});
			}
		} catch (error: any) {
			console.error("OTP controller error: ", error);
		}
	};
};
