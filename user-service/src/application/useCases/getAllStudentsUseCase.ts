import { IDependencies } from "../interfaces/IDependencies";

export const getAllStudentsUseCase = (dependencies: IDependencies) => {
	const {
		repositories: { getAllStudents },
	} = dependencies;
	return {
		execute: async (page?: number, limit?: number, search?: string) => {
			return await getAllStudents(page, limit, search);
		},
	};
};
