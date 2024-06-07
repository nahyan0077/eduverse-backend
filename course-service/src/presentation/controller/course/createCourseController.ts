import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createCourseController = (depedencies: IDependencies) => {
    const { useCases: {createCourseUseCase} } = depedencies
    return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = await createCourseUseCase(depedencies).execute(req.body);

			if (!result) {
				throw new Error("Course creation failed");
			}

			res.status(200).json({
				success: true,
				data: result,
				message: "Course created!",
			});
		} catch (error: any) {
			next(error);
		}
	};
}