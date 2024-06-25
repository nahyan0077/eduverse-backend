import jwt from "jsonwebtoken";

interface UserPayload {
    _id: string;
    email: string;
    role: string;
}

export const generateAccessToken = (
    payload: UserPayload
) => {

    const { _id, email, role } = payload;
    const newPayload = { _id, email, role };

    return jwt.sign(
        newPayload,
        String(process.env.ACCESS_TOKEN_SECRET),
        { expiresIn: '30s' }  
    );
};
