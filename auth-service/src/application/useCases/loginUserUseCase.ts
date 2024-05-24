import { UserEntity } from "@/domain/entities";
import { comparePassword } from "../../_lib/http/bcrypt/comparePassword";
import { IDependancies } from "../interfaces/IDependancies";

export const loginUserUseCase = (dependancies: IDependancies) => {
    const { repositories: {findUserByEmail} } = dependancies
    return {
        execute: async (email: string, password: string): Promise <UserEntity | null> => {
            try {
                const user = await findUserByEmail(email);
                console.log(user?.password,"casds user");
                
				if (!user) {
					return null;
				}
				const isMatch = await comparePassword(password, user.password);
                console.log(isMatch,"case log is mata");
                
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