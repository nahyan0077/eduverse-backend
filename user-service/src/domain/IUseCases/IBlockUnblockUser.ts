import { UserEntity } from "../entities";

export interface IBlockUnblockUser {
    execute:(id: string, isBlocked: boolean) => Promise < UserEntity | null >
}