import { IDependancies } from "../interfaces/IDependancies";


export const updateOtpUseCase = (dependancies: IDependancies) => {
    const { repositories:{updateOtp} } = dependancies
    return {
        execute: async (email: string, otp: string ) => {
            return await updateOtp(email,otp)
        }
    }
}