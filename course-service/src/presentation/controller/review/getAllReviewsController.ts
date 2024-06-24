import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllReviewsController = (dependecies: IDependencies) => {
    const { useCases: {getAllReviewsUseCase} } = dependecies
    return async (req: Request, res: Response, next: NextFunction) => {

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 5;

        const result = await getAllReviewsUseCase(dependecies).execute(page, limit)

        if (!result) {
            res.status(200).json({
				success: false,
				message: "All review fetched failed",
			});
        }

        res.status(200).json({
            success: true,
            data: result,
            message: "All reviews fetched successfully",
        });

    }
}