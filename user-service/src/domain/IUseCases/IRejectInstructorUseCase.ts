import { UserEntity } from "../entities";

export interface IRejectInstructorUseCase {
    execute: (id: string) => Promise < UserEntity | null >
}