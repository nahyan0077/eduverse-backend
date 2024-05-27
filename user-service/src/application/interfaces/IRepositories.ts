import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    getAllInstructors: (page?: number, limit?: number) => Promise <UserEntity[] | null >
    getAllStudents: (page?: number, limit?: number) => Promise <UserEntity[] | null >
    createUser: (data: UserEntity) => Promise < UserEntity | null >
}