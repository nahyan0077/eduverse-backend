import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import { generateAccessToken } from "../../../_lib/http/jwt";
import { Request, Response, NextFunction } from "express";

interface UserPayload {
    _id: string;
    email: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

const verifyToken = (token: string, secret: string): UserPayload | null => {
    try {
        return jwt.verify(token, secret) as UserPayload;
    } catch (err) {
        if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError) {
            console.error(`Error verifying token: ${err.message}`);
            return null;
        }
        throw err;
    }
};

export const jwtMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        console.log( process.env.ACCESS_TOKEN_SECRET,"acccesssssss");
        
        const { access_token, refresh_token } = req.cookies;
        let user: UserPayload | null = null;

        if (access_token) {
            user = verifyToken(access_token, process.env.ACCESS_TOKEN_SECRET!);
        }

        if (!user && refresh_token) {
            user = verifyToken(refresh_token, process.env.REFRESH_TOKEN_SECRET!);
            if (user) {
                const newAccessToken = generateAccessToken({
                    _id: user._id,
                    email: user.email,
                    role: user.role,
                });
                res.cookie("access_token", newAccessToken, {
                    httpOnly: true,
                    secure: true, 
                    sameSite: 'none',
                });
            }
        }

        if (!user) {
            return res.status(401).json({ message: "Unauthorized, please log in again." });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in JWT middleware:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
