import { IDependancies } from "../interfaces/IDependancies";

export const updatePasswordUseCase = (dependencies: IDependancies) => {
	const {
		repositories: { updatePassword },
	} = dependencies;
	return {
		execute: async (email: string, password: string) => {
			return await updatePassword(email, password);
		},
	};
};
