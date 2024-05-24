import { UserEntity } from "@/domain/entities";
import { comparePassword } from "../../_lib/http/bcrypt/comparePassword";
import { IDependancies } from "../interfaces/IDependancies";

export const loginUserUseCase = (dependancies: IDependancies) => {
    const { repositories: {findUserByEmail} } = dependancies
    return {
        execute: async (email: string, password: string): Promise <UserEntity | null> => {
            try {
                const user = await findUserByEmail(email);
                
				if (!user) {
					return null;
				}
				const isMatch = comparePassword(password, user.password);
                
				if (!isMatch) {
					return null;
				}
				return user;
            } catch (error: any) {
                console.error("login user usecase error",error);
                return null
            }
        }
    }
}