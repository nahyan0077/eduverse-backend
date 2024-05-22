import { IOtp } from "../entities/OtpEntities";


export interface IUpdateOtpUseCase {
    execute(eamil:string, otp:string): Promise <IOtp | null> 
}