import jwt from "jsonwebtoken";

export const verifyForgotPasswordToken = (token: string) => {
	const secret = process.env.FORGOT_PASSWORD_SECRET;

	if (!secret) {
		throw new Error("FORGOT_PASSWORD_SECRET environment variable is not set");
	}
	try {
		const decoded = jwt.verify(token, secret);
        return decoded
	} catch (error: any) {
		throw new Error("Invalid or expired token");
	}
};
