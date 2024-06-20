import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getCourseByIdController = (depenedencies: IDependencies) => {
	const {
		useCases: { getCourseByIdUseCase },
	} = depenedencies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;

			const result = await getCourseByIdUseCase(depenedencies).execute(id);

			if (!result) {
				return res.status(200).json({
					success: true,
					data: {},
					message: "Course doesn't exists",
				});
			}

			res.status(200).json({
				success: true,
				data: result,
				message: "Course retrieved!",
			});
		} catch (error: any) {
			next(error);
		}
	};
};
