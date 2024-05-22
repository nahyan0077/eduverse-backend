import { UserEntity } from "@/domain/entities";
import { IOtp } from "@/domain/entities/OtpEntities";


export interface IRepositores {
    findUserByEmail: (email: string) => Promise < UserEntity | null > 
    createUser: (data: UserEntity) => Promise < UserEntity | null >
    isExistingUserName: (username: string) => Promise < boolean | null >
}