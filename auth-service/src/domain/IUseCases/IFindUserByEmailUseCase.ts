import { UserEntity } from "../entities";


export interface IFindUserByEmailUseCase {
    execute(email: string): Promise < UserEntity | null >
}