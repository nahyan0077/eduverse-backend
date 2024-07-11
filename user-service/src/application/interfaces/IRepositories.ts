import { UserEntity } from "@/domain/entities";

export interface IRepositories {
    getAllInstructors: (page?: number, limit?: number) => Promise <UserEntity[] | null >
    getAllStudents: (page?: number, limit?: number,search?: string) => Promise <{ data: UserEntity[], totalPages: number, currentPage: number} >
    createUser: (data: UserEntity) => Promise < UserEntity | null >
    blockUnblockUser: (id: string, isBlocked: boolean) => Promise < UserEntity | null >
    verifyInstructor: (id: string) => Promise < UserEntity | null >
    rejectInstructor: (id: string) => Promise < UserEntity | null >
    updateUser: (data: UserEntity) => Promise < UserEntity | null >
}