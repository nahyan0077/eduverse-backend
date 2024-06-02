import jwt from "jsonwebtoken";

export const generateAccessToken = (
    payload: {
        _id: string,
        email: string,
        role: string
    }
) => {
    return jwt.sign(
        payload,
        String(process.env.ACCESS_TOKEN_SECRET),
        { expiresIn: '1h' }
    );
};