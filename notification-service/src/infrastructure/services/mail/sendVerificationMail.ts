import { generateOTP } from "@/_lib/utils/otp"
import { accountVerificationMail } from "@/_lib/utils/sendGrid"


export const sendVerifcationMail = async ( email: string ) => {
    try {
        let otp = generateOTP()

        await accountVerificationMail({
            email: email,
            otp: otp
        })

    } catch (error: any) {
        console.log(error);
        
    }   
}