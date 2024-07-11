import { generateRandomString } from "../../_lib/utils/generateRandomString";
import { generateAccessToken, generateRefreshToken } from "../../_lib/http/jwt";
import { IDependancies } from "@/application/interfaces/IDependancies";
import { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";
import { UserEntity } from "@/domain/entities";
import { updateLoginStreak } from "../../infrastructure/database/mongodb/repositories/updateLoginStreak";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuthController = (dependancies: IDependancies) => {
	const {
		useCases: { findUserByEmailUseCase },
	} = dependancies;

	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { credential } = req.body;

			const ticket = await client.verifyIdToken({
				idToken: credential,
				audience: process.env.GOOGLE_CLIENT_ID,
			});

			const payload = ticket.getPayload();

			if (!payload || !payload.email) {
				return res.status(400).json({
					success: false,
					message:
						"Google token is invalid or does not contain an email address.",
				});
			}

            console.log("payload",payload);

            const { email } = payload

            const existingUser = await findUserByEmailUseCase(dependancies).execute(email)

            const userId = existingUser?._id?.toString() as string

            //updating login streak
			if (existingUser?.role == "student") {
				await updateLoginStreak(userId);
			}

            if (existingUser && !existingUser.isBlocked) {
                const accessToken = generateAccessToken({
                    _id:String(existingUser?._id),
                    email: String(existingUser?.email),
                    role:existingUser?.role
                })

                const refreshToken = generateRefreshToken({
                    _id:String(existingUser?._id),
                    email: String(existingUser?.email),
                    role:existingUser?.role
                })

                res.cookie("access_token",accessToken,{httpOnly: true})
                res.cookie("refresh_token",refreshToken,{httpOnly: true})

                return res.status(200).json({
                    success: true,
                    existingUser: true,
                    data: existingUser,
                    message: "User Google login!",
                });

            }else if(existingUser && existingUser.isBlocked){
                return res.status(200).json({
                    success: true,
                    existingUser: true,
                    data: existingUser,
                    message: "User is been blocked my eduverse team..!",
                });
            }else{

                let signUpData = {
                    email: email,
                    password: `${generateRandomString()}`
                }

                return res.status(200).json({
                    success: true,
                    existingUser: false,
                    data: signUpData,
                    message: "User Google login!",
                });
            }


		} catch (error: any) {
			console.log("google auth controller error: ", error);
			next(error);
		}
	};
};
