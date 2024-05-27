import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    getAllInstructors: (page?: number, limit?: number) => Promise <UserEntity[] | null >
}