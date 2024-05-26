import { UserEntity } from "@/domain/entities";
import { comparePassword } from "../../_lib/http/bcrypt/comparePassword";
import { IDependancies } from "../interfaces/IDependancies";

export const loginUserUseCase = (dependancies: IDependancies) => {
    const { repositories: { findUserByEmail } } = dependancies;

    return {
        execute: async (email: string, password: string): Promise<UserEntity | null> => {
            try {
                const user = await findUserByEmail(email);
                
                if (!user) {
                    throw new Error('User not found');
                }
                            
                const isMatch = await comparePassword(password, user.password);
                
                
                if (!isMatch) {
                    throw new Error('Password does not match');
                }

                return user;
            } catch (error: any) {
                console.error("Login user use case error:", error.message);
                return null;
            }
        }
    };
};