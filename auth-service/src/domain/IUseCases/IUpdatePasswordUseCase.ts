import { UserEntity } from "../entities";

export interface IUpdatePasswordUseCase {
    execute(email: string, password: string) : Promise <UserEntity | null>
}