import { IDependancies } from "../interfaces/IDependancies";

export const verifyOtpUseCase = (dependancies: IDependancies) => {
    const { repositories: {verifyOtp} } = dependancies
    return {
        execute: async (email: string, otp: string) => {
            try {
                return await verifyOtp(email,otp)
                
            } catch (error: any) {
                console.log("verify otp usecase Error",error);
                
            }
        }
    }
}