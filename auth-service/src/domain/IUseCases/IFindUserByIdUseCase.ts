import { UserEntity } from "../entities";

export interface IFindUserByIdUseCase {
    execute(id: string): Promise <UserEntity | null>
}