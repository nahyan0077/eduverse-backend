// import { forgotPasswordMail } from "../../../_lib/utils/sendGrid";

// export const sendForgotPasswordMail = async (email: string, token: string) => {
//     try {

//         console.log(email, token);
        
        
//         await forgotPasswordMail({
//             email,
//             url:`${process.env.CLIENT_URL}/forgot-password?token=${token}`
//         })

//     } catch (error: any) {
//         console.log("forgot password: ",error);
//     }
// }