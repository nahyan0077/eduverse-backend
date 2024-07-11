import { UserEntity } from "../entities";

export interface IUpdateUserUseCase {
    execute(data: UserEntity):  Promise < UserEntity | null >
}