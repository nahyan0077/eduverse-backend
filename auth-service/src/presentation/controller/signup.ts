import { hashPassword } from "../../_lib/http/bcrypt/hashPassword";
import { IDependancies } from "@/application/interfaces/IDependancies";
import userCreatedProducer from "../../infrastructure/kafka/producers/userCreatedProducer";
import { NextFunction, Request, Response } from "express";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import bcrypt from 'bcrypt'
import { comparePassword } from "@/_lib/http/bcrypt";

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

				res.cookie("access_token", accessToken, { httpOnly: true });
				res.cookie("refresh_token", refreshToken, { httpOnly: true });

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
