import { Otp } from "../models/otpModel"

export const verifyOtp = async ( email: string, otp: string ): Promise<boolean> => {
    try {
        const verified = await Otp.findOne({email:email,otp:otp})
        return verified ? true : false
    } catch (error: any) {
        console.log(error, "Something Went wrong")
        return false
    }
}