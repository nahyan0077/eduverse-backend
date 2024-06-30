import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateMessageController = (dependencies: IDependencies) => {
	const {
		useCases: { updateMessageUseCase },
	} = dependencies;

	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const id = req.query.id as string;

			console.log(id,"idd message");
			

			if (!id) {
				return res.status(400).json({
					success: false,
					message: "User ID is required",
				});
			}

			const result = await updateMessageUseCase(dependencies).execute(id);

			if (!result) {
				return res.status(500).json({
					success: false,
					message: "Delete chat failed",
				});
			}

			return res.json({
				success: true,
				message: "Chat deleted successfully",
				data: result,
			});
		} catch (error: any) {
			next(error);
		}
	};
};
