import { UserEntity } from "@/domain/entities"
import { User } from "../models"
import { Otp } from "../models/otpModel"

export const verifyOtp = async ( email: string, otp: string ): Promise<boolean> => {
    try {
        const verified = await Otp.findOne({email:email,otp:otp})

        if (verified) {
            const result: UserEntity | null = await User.findOne({ email: email });
            console.log(result, "otp data");

            if (result && result.role === 'student') {
                await User.updateOne({ email: email }, { $set: { isVerified: true } });
            }
        }

        return verified !== null;
    } catch (error: any) {
        console.log(error, "Something Went wrong")
        return false
    }
}