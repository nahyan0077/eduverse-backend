import { UserEntity } from "../entities";

export interface IGetAllStudentsUseCase {
    execute(page?: number, limit?: number): Promise <UserEntity[] | null>
}