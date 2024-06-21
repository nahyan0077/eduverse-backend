import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getEnrollmentByUserIdController = (
	dependencies: IDependencies
) => {
	const {
		useCases: { getEnrollmentByUserIdUseCase },
	} = dependencies;
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { userId } = req.params;

			const result = await getEnrollmentByUserIdUseCase(dependencies).execute(
				userId
			);

            return res.status(200).json({
                success: true,
                data: result,
                message: "All enrolled courses fetched!",
            });


		} catch (error: any) {
			next(error);
		}
	};
};
