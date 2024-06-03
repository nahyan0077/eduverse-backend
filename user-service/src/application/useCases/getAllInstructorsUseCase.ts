import { IDependencies } from "../interfaces/IDependencies";

export const getAllInstructorsUseCase = (dependencies: IDependencies) => {
	const {
		repositories: { getAllInstructors },
	} = dependencies;
	return {
		execute: async (page?: number, limit?: number) => {
			return await getAllInstructors(page, limit);
		},
	};
};
