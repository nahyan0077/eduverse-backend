import { UserEntity } from "../entities";

export interface ILoginUserUseCase {
    execute(email: string , password: string) : Promise < UserEntity | null >
}