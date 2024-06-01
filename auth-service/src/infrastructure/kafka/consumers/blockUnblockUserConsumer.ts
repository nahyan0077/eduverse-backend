import { blockUnblockUser } from "../../../infrastructure/database/mongodb/repositories/blockUnblockUser";

export default async (data: { id: string; isBlocked: boolean }) => {
	try {
		await blockUnblockUser(data.id,data.isBlocked);


		console.log("block-unblock-user-consumed");

	} catch (error: any) {
		console.log("block-unblock-user-consumer error: ", error?.message);
	}
};