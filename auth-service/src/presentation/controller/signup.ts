import { hashPassword } from "../../_lib/http/bcrypt/hashPassword";
import { IDependancies } from "@/application/interfaces/IDependancies";
import userCreatedProducer from "../../infrastructure/kafka/producers/userCreatedProducer";
import { NextFunction, Request, Response } from "express";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { updateLoginStreak } from "../../infrastructure/database/mongodb/repositories/updateLoginStreak";

export const signupController = (dependancies: IDependancies) => {
	const {
		useCases: { createUserUseCase },
	} = dependancies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			req.body.password = await hashPassword(req.body.password);
			
			

			
			const created = await createUserUseCase(dependancies).execute(req.body);

			if (!created) {
				res
					.status(500)
					.json({ success: false, message: "User creation failed!" });
			} else {
				//user created data produced to kafka
				await userCreatedProducer(created);

				const userId = created?._id?.toString() as string

				if (created.role == "student" ) {
					await updateLoginStreak(userId)
				}

				const accessToken = generateAccessToken({
					_id: String(created?._id),
					email: created.email,
					role: created.email,
				});

				const refreshToken = generateRefreshToken({
					_id: String(created?._id),
					email: created.email,
					role: created.email,
				});

				res.cookie("access_token", accessToken, {
					httpOnly: true,
					secure: true, 
					sameSite: "none",
				  });
				  
				  res.cookie("refresh_token", refreshToken, {
					httpOnly: true,
					secure: true, 
					sameSite: "none",
				  });

				res
					.status(201)
					.json({
						success: true,
						data: created,
						message: "User created successfully!",
					});
			}
		} catch (error: any) {
			next(error);
		}
	};
};
