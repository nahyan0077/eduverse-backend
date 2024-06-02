import { UserEntity } from "../entities";

export interface IVerifyInstructor {
    execute: (id: string) => Promise < UserEntity | null >
}