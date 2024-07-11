import { UserEntity } from "../entities";

export interface IGetAllInstructorsUseCase {
    execute(page?: number, limit?: number): Promise <UserEntity[] | null>
}