import { IDependancies } from "../interfaces/IDependancies";

export const verifyOtpUseCase = (dependancies: IDependancies) => {
    const { repositories: {verifyOtp} } = dependancies
    return {
        execute: async (email: string, otp: string) => {
            try {
                const result = await verifyOtp(email,otp)
                return result
            } catch (error: any) {
                console.log("verify otp usecase Error",error);
                
            }
        }
    }
}