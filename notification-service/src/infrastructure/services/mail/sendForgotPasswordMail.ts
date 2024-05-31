import { forgotPasswordMail } from "../../../_lib/utils/sendGrid";

export const sendForgotPasswordMail = async (email: string, token: string) => {
    try {
        
        await forgotPasswordMail({
            email,
            url:`${process.env.CLIENT_URL}/confirm-email?token=${token}`
        })

    } catch (error: any) {
        console.log("forgot password: ",error);
        
    }
}