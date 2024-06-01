import { blockUnblockUser } from "../database/mongodb/repositories/blockUnblockUser";

export const updateBlockUnblockUser = async (id: string, isBlocked: boolean) => {
    try {
        await blockUnblockUser(id, isBlocked)
    } catch (error: any) {
        console.log(error);
    }
}