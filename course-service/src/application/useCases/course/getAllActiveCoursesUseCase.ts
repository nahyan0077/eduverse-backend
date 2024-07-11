import { IDependencies } from "@/application/interfaces/IDependencies";

export const getAllActiveCoursesUseCase = (dependencies: IDependencies) => {
	const {
		repositories: { getAllActiveCourses },
	} = dependencies;
	return {
		execute: async (page: string | number, limit: string | number, search: string) => {
			let data = { page, limit, search };
			return await getAllActiveCourses(data);
		},
	};
};
