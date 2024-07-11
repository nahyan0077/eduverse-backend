import { UserEntity } from "../entities";

export interface IVerifyInstructorUseCase {
    execute: (id: string) => Promise < UserEntity | null >
}