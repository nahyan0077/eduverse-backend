import { UserEntity } from "../entities";

export interface ICreateUser {
    execute(data: UserEntity): Promise < UserEntity | null >
}