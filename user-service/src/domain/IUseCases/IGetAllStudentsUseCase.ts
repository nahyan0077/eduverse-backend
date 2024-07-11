import { UserEntity } from "../entities";

export interface IGetAllStudentsUseCase {
    execute(page?: number, limit?: number, search?: string): Promise <{ data: UserEntity[], totalPages: number, currentPage: number}>
}